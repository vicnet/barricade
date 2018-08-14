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
		stream write: ' ' ]
!

repair: nb
	"Nb dés affectés à la réparation dela voiture"
	self add: nb class: BZActionRepair
! !

BZAction subclass: #BZAward
	instanceVariableNames: ''
	package: 'Barricade'!

BZAward subclass: #BZAwardKillAll
	instanceVariableNames: ''
	package: 'Barricade'!

!BZAwardKillAll methodsFor: 'as yet unclassified'!

applyOn: board
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
	^ board repair: 1
!

printOn: stream
	stream write: '🚗1'
! !

Object subclass: #BZBoard
	instanceVariableNames: 'zombies killed barricade garage noArrival award'
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
	award := false.
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
	^ award
!

build: nb
	"Reconstruit la barricade"
	barricade := (barricade+nb>10)
		ifFalse: [ barricade+nb ]
		ifTrue:  [ 10 ]
!

initialize
	"Etat initial du jeu"
	zombies := 0.
	killed := 0.
	barricade := 10.
	garage := 0.
	noArrival := false.
	award := false
!

kill: nb
	"Tue des zombies, au max de ce qui existent
	 Retourne vrai si 10 zombies tués, Faux sinon"
	| nbreal |
	nbreal := nb.
	(zombies < nb)
		ifTrue: [ nbreal := zombies ].
	zombies := zombies - nbreal.
	killed := killed + nbreal.
	"test si dépassement de 10 zombies tués"
	(killed >= 10)
		ifTrue: [ killed := killed-10. award := true. ^ true ].
	^ false
!

killAll
	"Tue tous les zombies.
	 Retourne vrai si 10 zombies tués, Faux sinon"
	 ^ self kill: zombies
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
! !

Object subclass: #BZGame
	instanceVariableNames: 'board'
	package: 'Barricade'!
!BZGame commentStamp!
Jeu avec application des différentes phases!

!BZGame methodsFor: 'as yet unclassified'!

actions
	"^ BZActions new kill: 2; repair: 2"
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
	"^ BZAwardRepair new"
	^ {BZAwardKillAll. BZAwardNoArrival. BZAwardRebuild. BZAwardRepair} atRandom new
!

end
	board lost ifTrue: [ ^ true ].
	board win ifTrue: [ ^ true ].
	^ false
!

evaluate
	board lost ifTrue: [ ^ -100].
	board win ifTrue: [ ^ 100].
	^ 0
!

initialize
	board := BZBoard new
!

play
	| actions |
	board arrival.
	actions := self actions.
	board apply: actions.
	board attack.
	Transcript show: actions; show: ' => '; show: board; cr.
	self end ifTrue: [ ^ board ].
	board award ifTrue: [
		actions := self awards.
		board apply: actions.
		Transcript show: '☘ '; show: actions; show: ' => '; show: board; cr ].
	^ board
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

