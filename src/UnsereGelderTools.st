Smalltalk createPackage: 'UnsereGelderTools'!
(Smalltalk packageAt: 'UnsereGelderTools' ifAbsent: [ self error: 'Package not created: UnsereGelderTools' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #UnsereGelderTools
	slots: {}
	package: 'UnsereGelderTools'!

!UnsereGelderTools methodsFor: 'action'!

openHelios
	<inlineJS: 'require(''amber/helpers'').popupHelios()'>
! !

!UnsereGelderTools methodsFor: 'backend'!

getCities
	"UnsereGelderTools new getCities"
	
	(Platform fetch: 'http://localhost:63036/cityNames') then: [:response | 
		response json then: [:json | 
			self showCities: json]]
!

showCities: someCities
	| list |
	list := '#CityList' asSilk.
	someCities do: [:cityname |
		list LI: cityname]
! !

!UnsereGelderTools methodsFor: 'starting'!

augmentPage
	| body citiesButton heliosButton |
	citiesButton := (Silk BUTTON: 'get Cities') on: #click bind: [ self getCities ].
	heliosButton := (Silk BUTTON: 'Helios') on: #click bind: [ self openHelios ].
	body := Silk new.
	body reset.
	body << citiesButton.
	body << heliosButton.
	body UL: {'id' -> 'CityList'}
! !

!UnsereGelderTools class methodsFor: 'starting'!

start
	self new augmentPage
! !

