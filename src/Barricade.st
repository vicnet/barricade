Smalltalk createPackage: 'Barricade'!
(Smalltalk packageAt: 'Barricade' ifAbsent: [ self error: 'Package not created: Barricade' ]) imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #BZAction
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAction methodsFor: 'as yet unclassified'!

applyOn: board
	self subclassResponsibility
! !

BZAction subclass: #BZActionDice
	instanceVariableNames: 'dices success'
	package: 'Barricade'!

!BZActionDice methodsFor: 'as yet unclassified'!

dice
	"tirage d'un dé"
	^ (6 atRandom)
!

dices
	^ dices
!

dices: nb
	dices := nb
!

initialize
	dices := 0.
	success := 0
!

success
	"succes si dé >= sucess pour le nombe de dés"
	^ self success: success with: dices
!

success: on
	"succes si >= on, retourne 0 ou 1"
	^ ((self dice) >= on) ifTrue: [1] ifFalse: [0]
!

success: on with: nb
	"tirage du nbre de nb dés, sucess si >= on"
	^ (1 to: nb) inject: 0 into: [ :sum :each |
		sum + (self success: on)
		]
! !

BZActionDice subclass: #BZActionBuild
	instanceVariableNames: ''
	package: 'Barricade'!

!BZActionBuild methodsFor: 'as yet unclassified'!

applyOn: board
	^ board build: (self success)
!

initialize
	super initialize.
	success := 3
!

printOn: stream
	stream write: '⛉'.
	dices printOn: stream
! !

BZActionDice subclass: #BZActionKill
	instanceVariableNames: ''
	package: 'Barricade'!

!BZActionKill methodsFor: 'as yet unclassified'!

applyOn: board
	^ board kill: (self success)
!

initialize
	super initialize.
	success := 3
!

printOn: stream
	stream write: '🧟'.
	dices printOn: stream
! !

BZActionDice subclass: #BZActionRepair
	instanceVariableNames: ''
	package: 'Barricade'!

!BZActionRepair methodsFor: 'as yet unclassified'!

applyOn: board
	^ board repair: (self success)
!

initialize
	super initialize.
	success := 5
!

printOn: stream
	stream write: '🚗'.
	dices printOn: stream
! !

BZAction subclass: #BZActions
	instanceVariableNames: 'actions'
	package: 'Barricade'!
!BZActions commentStamp!
Dés affectés comme actions!

!BZActions methodsFor: 'as yet unclassified'!

add: nb class: class
	"Nb dés affectés à une action"
	nb isZero ifTrue: [ ^ self ].
	actions add: (class new dices: nb)
!

applyOn: board
	actions do: [ :action |
		action applyOn: board ]
!

build: nb
	"Nb dés affectés à la réparation de la barricade"
	self add: nb class: BZActionBuild
!

initialize
	"Aucune action affectée au début"
	actions := Array new
!

kill: nb
	"Nb dés affectés au nettoyage"
	self add: nb class: BZActionKill
!

kill: nbkill build: nbbuild repair: nbrepair
	"affectation d'actions"
	self kill: nbkill;
		 build: nbbuild;
		 repair: nbrepair
!

printOn: stream
	actions do: [ :action |
		action printOn: stream.
		stream write: ',' ]
!

repair: nb
	"Nb dés affectés à la réparation dela voiture"
	self add: nb class: BZActionRepair
! !

BZAction subclass: #BZAward
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAward methodsFor: 'as yet unclassified'!

applyOn: board
	board awarded
! !

BZAward subclass: #BZAwardKillAll
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAwardKillAll methodsFor: 'as yet unclassified'!

applyOn: board
	super applyOn: board.
	^ board killAll
!

printOn: stream
	stream write: '🧟☠'
! !

BZAward subclass: #BZAwardNoArrival
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAwardNoArrival methodsFor: 'as yet unclassified'!

applyOn: board
	super applyOn: board.
	^ board noArrival
!

printOn: stream
	stream write: '🧟✘'
! !

BZAward subclass: #BZAwardRebuild
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAwardRebuild methodsFor: 'as yet unclassified'!

applyOn: board
	super applyOn: board.
	^ board build: 3
!

printOn: stream
	stream write: '⛉3'
! !

BZAward subclass: #BZAwardRepair
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAwardRepair methodsFor: 'as yet unclassified'!

applyOn: board
	super applyOn: board.
	^ board repair: 1
!

printOn: stream
	stream write: '🚗1'
! !

Object subclass: #BZAnnounceStep
	instanceVariableNames: 'board actions'
	package: 'Barricade'!

!BZAnnounceStep methodsFor: 'as yet unclassified'!

actions
	^ actions
!

actions: action
	actions := action
!

board
	^ board
!

board: aboard
	board := aboard
!

board: aboard actions: action
	board := aboard.
	actions := action
! !

BZAnnounceStep subclass: #BZAnnounceAction
	instanceVariableNames: ''
	package: 'Barricade'!

BZAnnounceStep subclass: #BZAnnounceAward
	instanceVariableNames: ''
	package: 'Barricade'!

Announcer subclass: #BZAnnouncer
	instanceVariableNames: 'silent old'
	package: 'Barricade'!

!BZAnnouncer methodsFor: 'as yet unclassified'!

announce: board actions: actions
	silent ifTrue: [ ^ self ].
	self announce: (BZAnnounceAction new board: board actions: actions)
!

announce: board award: actions
	silent ifTrue: [ ^ self ].
	self announce: (BZAnnounceAward new board: board actions: actions)
!

initialize
	super initialize.
	silent := false.
	old := false
!

restore
	silent := old
!

silence
	old := silent.
	silent := true
!

switch
	silent := silent not
! !

BZAnnouncer class instanceVariableNames: 'current'!

!BZAnnouncer class methodsFor: 'as yet unclassified'!

current
	^ current ifNil: [ current := super new ]
!

new
	self shouldNotImplement
! !

Object subclass: #BZBoard
	instanceVariableNames: 'zombies killed barricade garage noArrival'
	package: 'Barricade'!
!BZBoard commentStamp!
Plateau de jeu;
- zombies: nb de zombie vivant courant
- killed: nb de zombies tués
- barricade: point de vie de la barricade
- garage: etat de la voiture!

!BZBoard methodsFor: 'as yet unclassified'!

apply: actions
	"Applique les actions"
	actions applyOn: self
!

arrival
	"Ajoute des zombies"
	zombies := zombies + self newZombies
!

attack
	"Les zombies attaquent la barricade.
	 Retourne faux si perdu, vrai sinon"
	barricade := barricade-zombies.
	^ self lost not
!

award
	^ killed>=10
!

awarded
	^ killed := killed-10
!

barricade
	^ barricade
!

barricade: nb
	barricade := nb
!

build: nb
	"Reconstruit la barricade"
	barricade := (barricade+nb>10)
		ifFalse: [ barricade+nb ]
		ifTrue:  [ 10 ]
!

end
	^ self lost | self win
!

garage
	^ garage
!

garage: nb
	garage := nb
!

initialize
	"Etat initial du jeu"
	zombies := 0.
	killed := 0.
	barricade := 10.
	garage := 0.
	noArrival := false
!

kill: nb
	"Tue des zombies, au max de ce qui existent
	 Retourne vrai si récompense (10 zombies tués), Faux sinon"
	| nbreal |
	nbreal := nb.
	(zombies < nb)
		ifTrue: [ nbreal := zombies ].
	zombies := zombies - nbreal.
	killed := killed + nbreal.
	^ self award
!

killAll
	"Tue tous les zombies.
	 Retourne vrai si 10 zombies tués, Faux sinon"
	 ^ self kill: zombies
!

killed
	^ killed
!

lost
	^ barricade<=0
!

newZombies
	"Nbre de zombie en fonction du garage et des récompenses"
	noArrival ifTrue: [ noArrival := false. ^ 0 ].
	garage <= 30 ifTrue: [ ^ 1 ].
	garage <= 60 ifTrue: [ ^ 2 ].
	garage <= 80 ifTrue: [ ^ 3 ].
	^ 4
!

noArrival
	"pas de zombie au prochain tour"
	noArrival := true
!

printOn: stream
	stream write: '🧟'.
	zombies printOn: stream.
	stream write: ' ☠'.
	killed printOn: stream.
	stream write: ' ⛉'.
	barricade  printOn: stream.
	stream write: ' 🚗'.
	garage   printOn: stream.
	stream write: '%'
!

repair: nb
	"Reconstruit la voiture.
	 nb est le nombre de points gagnés.
	 Retourne vrai si gagné, faux sinon"
	garage := (garage+(nb*10)>100)
		ifFalse: [ garage+(nb*10) ]
		ifTrue:  [ 100. ^ true ].
	^ false
!

win
	^ garage>=100
!

zombies
	^ zombies
!

zombies: nb
	zombies := nb
! !

Object subclass: #BZGame
	instanceVariableNames: ''
	package: 'Barricade'!
!BZGame commentStamp!
Jeu avec application des différentes phases!

!BZGame methodsFor: 'as yet unclassified'!

evaluate: strat for: nb
	^ ((1 to: nb) inject: 0 into: [ :sum :each | sum + (self play: strat) ]) * 100 / nb
!

play: strat
	^ self play: BZBoard new with: strat
!

play: board with: strat
	[ board end ] whileFalse: [ self playOne: board with: strat ].
	^ board lost not
!

playOne: board with: strat
	"Joue un tour"
	| actions |
	board arrival.
	actions := strat actions: board.
	board apply: actions.
	board attack.
	"notify every body"
	BZAnnouncer current announce: board actions: actions.
	"on continu avec les récompenses"
	board end ifTrue: [ ^ board ].
	board award ifTrue: [
		actions := strat awards: board.
		board apply: actions.
		"notify every body"
		BZAnnouncer current announce: board award: actions ].
! !

Object subclass: #BZStrategy
	instanceVariableNames: ''
	package: 'Barricade'!

!BZStrategy methodsFor: 'as yet unclassified'!

actions
	"Retourne une liste d'action avec 4 dés"
	^ nil
!

actions: board
	"Retourne une liste d'action avec 4 dés"
	^ self actions
!

awards
	"Retourne une liste d'action de type récompense"
	^ nil
!

awards: board
	"Retourne une liste d'action de type récompense"
	^ self awards
! !

BZStrategy subclass: #BZStratAdapt
	instanceVariableNames: ''
	package: 'Barricade'!
!BZStratAdapt commentStamp!
Only kill zombies with actions and use award to repair car.!

!BZStratAdapt methodsFor: 'as yet unclassified'!

actions: board
	| kill build |
	"si plein de zombies, on massacre"
	(board zombies >= 4) ifTrue: [
		^ BZActionKill new dices: 4 ].
	"sinon on massacre que ce qu'il faut"
	kill := board zombies.
	"on répare que si c'est nécessaire"
	build := 0.
	(board barricade < 6) ifTrue: [
		build := 1 ].
	^ BZActions new kill: kill; build: build; repair: 4-kill-build
!

awards: board
	(board zombies >= 3) ifTrue: [ ^ BZAwardKillAll new ].
	(board barricade <= 6) ifTrue: [ ^ BZAwardRebuild new ].
	(board garage >= 80) ifTrue: [ ^ BZAwardNoArrival new ].
	^ BZAwardRepair new
! !

BZStrategy subclass: #BZStratAggressive
	instanceVariableNames: ''
	package: 'Barricade'!
!BZStratAggressive commentStamp!
Only kill zombies with actions and awards.!

!BZStratAggressive methodsFor: 'as yet unclassified'!

actions
	^ BZActionKill new dices: 4
!

awards
	^ BZAwardKillAll new
! !

BZStrategy subclass: #BZStratKillAwardRepair
	instanceVariableNames: ''
	package: 'Barricade'!
!BZStratKillAwardRepair commentStamp!
Only kill zombies with actions and use award to repair car.!

!BZStratKillAwardRepair methodsFor: 'as yet unclassified'!

actions
	^ BZActionKill new dices: 4
!

awards
	^ BZAwardRepair new
! !

BZStrategy subclass: #BZStratMonteCarlo
	instanceVariableNames: 'game test'
	package: 'Barricade'!

!BZStratMonteCarlo methodsFor: 'as yet unclassified'!

actions: board
	| actions max |
	BZAnnouncer current silence.
	max = nil.
	(self allActions: board) do: [ :action | | val |
		val := self evaluate: action on: board.
"Transcript show: 'test action : '; show: action; show: ' => '; show: val; cr."
		(val < max) ifFalse: [
			actions := action.
			max := val ].
		].
	BZAnnouncer current restore.
	^ actions
!

allActions: board
	| list |
	list := {}.
	(0 to: 4) do: [ :kill |
		(0 to: 4-kill) do: [ :build | | bad |
			bad := ((board zombies <= 0) & (kill > 0))
				 | ((board barricade >= 10) & (build > 0)).
			bad ifFalse: [
				list add: (BZActions new
					kill: kill;
					build: build;
					repair: 4-kill-build) ]
				]
		].
	^ list
!

awards: board
	| actions |
	actions := {BZAwardNoArrival. BZAwardRepair}.
	(board zombies > 0) ifTrue: [ actions add: BZAwardKillAll ].
	(board barricade < 10) ifTrue: [ actions add: BZAwardRebuild ].
	^ actions atRandom new
!

evaluate: action on: board
	"test strategy on current board"
	^ (1 to: 500) inject: 0 into: [ :sum :each |
		"set first action to do for testing"
		test first: action.
		"evaluate on current board"
		sum + (game play: board copy with: test) ]
!

initialize
	game := BZGame new.
	test := BZStratOneThenOther new.
	test next: BZStratRandomPlus new
! !

BZStrategy subclass: #BZStratOneThenOther
	instanceVariableNames: 'actions next'
	package: 'Barricade'!
!BZStratOneThenOther commentStamp!
Return one defined action first time call then call other strategy.!

!BZStratOneThenOther methodsFor: 'as yet unclassified'!

actions: board
	actions isNil ifFalse: [ |old| old:=actions. actions:=nil. ^ old ].
	^ next actions: board
!

awards: board
	^ next awards: board
!

first: action
	actions := action
!

next: strat
	next := strat
! !

BZStrategy subclass: #BZStratRandom
	instanceVariableNames: ''
	package: 'Barricade'!

!BZStratRandom methodsFor: 'as yet unclassified'!

actions
	| actions max dices |
	max := 4.
	actions := BZActions new.

	dices := ((max+1) atRandom) - 1.
	actions kill: dices.
	max := max - dices.

	dices := ((max+1) atRandom) - 1.
	actions build: dices.
	max := max - dices.

	dices := max.
	actions repair: dices.
	
	^ actions
!

awards
	^ {BZAwardKillAll. BZAwardNoArrival. BZAwardRebuild. BZAwardRepair} atRandom new
! !

BZStrategy subclass: #BZStratRandomPlus
	instanceVariableNames: ''
	package: 'Barricade'!

!BZStratRandomPlus methodsFor: 'as yet unclassified'!

actions: board
	| actions max dices |
	max := 4.
	actions := BZActions new.

	(board zombies > 0) ifTrue: [
		dices := ((max+1) atRandom) - 1.
		actions kill: dices.
		max := max - dices ].

	(board barricade < 10) ifTrue: [
		dices := ((max+1) atRandom) - 1.
		actions build: dices.
		max := max - dices ].

	dices := max.
	actions repair: dices.
	
	^ actions
!

awards: board
	| actions |
	actions := {BZAwardNoArrival. BZAwardRepair}.
	(board zombies > 0) ifTrue: [ actions add: BZAwardKillAll ].
	(board barricade < 10) ifTrue: [ actions add: BZAwardRebuild ].
	^ actions atRandom new
! !

Object subclass: #BZTranscript
	instanceVariableNames: ''
	package: 'Barricade'!

!BZTranscript methodsFor: 'as yet unclassified'!

initialize
	BZAnnouncer current on: BZAnnounceAction do: [ :step |
		Transcript show: step actions; show: ' => '; show: step board; cr ].
	BZAnnouncer current on: BZAnnounceAward do: [ :step |
		Transcript show: '☘ '; show: step actions; show: ' => '; show: step board; cr ]
!

uninitialize
	BZAnnouncer current unsubscribe: nil
! !

Object subclass: #Barricade
	instanceVariableNames: ''
	package: 'Barricade'!

!Barricade methodsFor: 'starting'!

augmentPage
! !

!Barricade class methodsFor: 'starting'!

start
	self new augmentPage
! !

