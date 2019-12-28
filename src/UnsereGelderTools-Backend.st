Smalltalk createPackage: 'UnsereGelderTools-Backend'!
Object subclass: #UnsereGelderToolsBackend
	slots: {}
	package: 'UnsereGelderTools-Backend'!

!UnsereGelderToolsBackend methodsFor: 'lambda api'!

echoEvent: event andContext: context
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#event -> event. #context -> context})
	}
!

status
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#ok -> true. #amber -> Smalltalk version. #node -> process version})
	}
! !

