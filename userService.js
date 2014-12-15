var Faker = require('Faker');

module.exports = {
	allUsers: function() {
		return getAllUsers();

	}
}


function getAllUsers() {
	return [{
		"name": "Claud Hansen",
		"email": "Rene.Orn@rosamond.us",
		"card": {
			"name": "Rolando Homenick",
			"username": "Bennett",
			"email": "Albin.Beer@eino.ca",
			"address": {
				"streetA": "Durgan Plains",
				"streetB": "9116 Schulist Parks",
				"streetC": "02819 Charley Course Apt. 600",
				"streetD": "Apt. 494",
				"city": "Ebertchester",
				"ukCounty": "Shropshire",
				"ukCountry": "Northern Ireland",
				"zipcode": "57504-9809",
				"geo": {
					"lat": "64.4418",
					"lng": "-126.2298"
				}
			},
			"phone": "1-787-761-6482 x36126",
			"website": "shanel.net",
			"company": {
				"name": "Kling, Deckow and Shanahan",
				"catchPhrase": "Proactive empowering protocol",
				"bs": "disintermediate enterprise communities"
			},
			"posts": [{
				"words": ["rem", "nihil", "adipisci"],
				"sentence": "sed expedita excepturi est tempora nihil fugiat",
				"sentences": "placeat et voluptates qui quis repudiandae dignissimos\nquo perferendis sed voluptatem et sed exercitationem culpa\net exercitationem deleniti doloribus ipsa dolores id sint",
				"paragraph": "cupiditate asperiores inventore veritatis blanditiis\nest molestias tenetur omnis hic est eum aperiam\naccusamus quia fugit voluptas temporibus nostrum sint\naccusamus consequatur sint architecto"
			}, {
				"words": ["dolor", "eos", "qui"],
				"sentence": "dolorem aut tempore omnis nam",
				"sentences": "exercitationem sequi officia dolor fuga quae unde expedita qui\nquibusdam expedita officia incidunt repellendus error occaecati quia voluptatem\npariatur deserunt libero est",
				"paragraph": "et nesciunt velit blanditiis voluptas dolores iure ratione temporibus\nipsa qui aut maxime illo molestias illum\nnecessitatibus fuga minima voluptatem magnam nam autem et\nillo enim fugit repellendus quidem"
			}, {
				"words": ["corrupti", "ut", "debitis"],
				"sentence": "labore aut accusamus nulla",
				"sentences": "illo eaque similique earum nam et enim\neum aspernatur et optio aut quos aut repellat\nanimi sunt quia omnis aut expedita velit saepe",
				"paragraph": "dignissimos sunt sunt inventore\net excepturi eos\nenim molestiae quas quasi\nhic dicta autem\nvel soluta fuga quo cum"
			}]
		}
	}, {
		"name": "Kraig Hand",
		"email": "Lea.Wunsch@karl.us",
		"card": {
			"name": "Juliana Cartwright",
			"username": "Eldred",
			"email": "Kevon@roel.ca",
			"address": {
				"streetA": "Hickle Canyon",
				"streetB": "7241 Rosenbaum Estates",
				"streetC": "12020 Reichel Estate Apt. 655",
				"streetD": "Suite 133",
				"city": "Doyleborough",
				"ukCounty": "Fife",
				"ukCountry": "Wales",
				"zipcode": "51467-4371",
				"geo": {
					"lat": "-44.4351",
					"lng": "-134.5760"
				}
			},
			"phone": "1-856-582-5884",
			"website": "krystina.co.uk",
			"company": {
				"name": "Halvorson, Bogan and Smith",
				"catchPhrase": "Diverse needs-based orchestration",
				"bs": "facilitate seamless e-markets"
			},
			"posts": [{
				"words": ["ut", "veritatis", "temporibus"],
				"sentence": "impedit et quod cumque",
				"sentences": "voluptas laborum qui harum sit minima quo\nnecessitatibus rerum voluptatibus id voluptas tenetur perspiciatis cum\net repellendus aut consectetur eligendi dolores",
				"paragraph": "corrupti molestiae corporis\nillo reprehenderit autem debitis nostrum nihil ut cum\nmolestiae adipisci asperiores error debitis sit aliquid aut tempore\nculpa sunt expedita illum minus ut quo\naut facere aut quis atque voluptatum incidunt eveniet"
			}, {
				"words": ["reprehenderit", "sit", "ut"],
				"sentence": "nam numquam ut qui ad illo ratione",
				"sentences": "sint aut reprehenderit temporibus sit et\nvoluptatem error consequuntur\nsed mollitia nam voluptatem sit molestias consequatur",
				"paragraph": "est rerum temporibus velit quisquam sapiente\net deleniti voluptatem\nqui neque vero dolorem\nodit et doloremque earum aut molestiae in rerum"
			}, {
				"words": ["doloribus", "dolorum", "nemo"],
				"sentence": "quasi rerum adipisci earum",
				"sentences": "et temporibus eum non est nemo dolore tenetur laudantium\nsit autem assumenda quia culpa qui repellendus sint\naccusantium laudantium animi",
				"paragraph": "ut maxime voluptas quis delectus recusandae\nnecessitatibus delectus error blanditiis id eaque quas non\nquis esse blanditiis enim quidem"
			}]
		}
	}, {
		"name": "Mr. Hertha Fisher",
		"email": "Jimmie@neva.io",
		"card": {
			"name": "Sabina Brekke",
			"username": "Jarret.Boehm",
			"email": "Harmony.Dickens@myriam.net",
			"address": {
				"streetA": "Wyman Manors",
				"streetB": "41034 Wuckert Light",
				"streetC": "693 Lueilwitz Islands Suite 515",
				"streetD": "Suite 716",
				"city": "Bergstromton",
				"ukCounty": "Gwynedd County",
				"ukCountry": "Scotland",
				"zipcode": "81568-3782",
				"geo": {
					"lat": "-36.8679",
					"lng": "123.5250"
				}
			},
			"phone": "(512)659-7334",
			"website": "valentina.ca",
			"company": {
				"name": "Gutkowski-Funk",
				"catchPhrase": "Cloned incremental neural-net",
				"bs": "seize seamless relationships"
			},
			"posts": [{
				"words": ["occaecati", "ut", "iste"],
				"sentence": "voluptas sit a cupiditate",
				"sentences": "aliquid autem omnis fugiat magni\nest omnis quia\net et neque ut",
				"paragraph": "ipsa qui maxime quo saepe\nid delectus dolore rerum iure non et sint est\ninventore omnis at quaerat voluptatem officiis\naccusamus perferendis possimus quidem aperiam aliquid minus non facilis"
			}, {
				"words": ["architecto", "ea", "occaecati"],
				"sentence": "aut error autem sit vitae earum dolores facilis sed",
				"sentences": "porro repudiandae non voluptatem doloribus aut architecto\nut autem quia beatae quos aut earum rem repellat\natque molestiae nihil iure non",
				"paragraph": "numquam quo totam ut labore quidem saepe magnam sunt\ndolor quae ut qui voluptas\nmolestias ipsam quia blanditiis doloremque consequuntur non sed\nesse enim eos nemo"
			}, {
				"words": ["tenetur", "cumque", "saepe"],
				"sentence": "error officia at",
				"sentences": "ad ea deleniti ut nihil\nest occaecati optio\nvel vel molestiae",
				"paragraph": "eos facere sit architecto eum voluptate sequi vero\nreprehenderit tenetur veniam et ducimus et ut velit\ncorrupti ut excepturi eligendi quas eaque et minus"
			}]
		}
	}, {
		"name": "Dixie Beier",
		"email": "Ward@werner.net",
		"card": {
			"name": "Paris Mraz",
			"username": "Meaghan.Legros",
			"email": "Gwen@nicole.co.uk",
			"address": {
				"streetA": "Raquel Garden",
				"streetB": "551 Davin Courts",
				"streetC": "940 Keeling Key Suite 545",
				"streetD": "Apt. 400",
				"city": "East Bridgette",
				"ukCounty": "Strathclyde",
				"ukCountry": "England",
				"zipcode": "52859-0963",
				"geo": {
					"lat": "78.7401",
					"lng": "-172.4350"
				}
			},
			"phone": "816.253.8923 x378",
			"website": "orval.tv",
			"company": {
				"name": "Leffler, Collins and McGlynn",
				"catchPhrase": "Optimized analyzing focus group",
				"bs": "unleash ubiquitous eyeballs"
			},
			"posts": [{
				"words": ["sapiente", "architecto", "nesciunt"],
				"sentence": "in voluptas officia amet voluptatem enim temporibus qui libero",
				"sentences": "sed vitae consequatur eius cum rerum doloribus voluptate\ndelectus omnis eos voluptate\nnumquam ad quis blanditiis ea",
				"paragraph": "possimus sapiente harum asperiores\nnecessitatibus expedita itaque qui voluptas sit\natque eos aperiam aut quis"
			}, {
				"words": ["consequatur", "ab", "alias"],
				"sentence": "necessitatibus voluptatem voluptate assumenda",
				"sentences": "beatae impedit et et quidem quisquam tempora esse\nut iure hic et at eum laboriosam repellendus\nperspiciatis error dignissimos commodi beatae autem maiores dolores quidem",
				"paragraph": "est tenetur omnis velit sapiente aliquid voluptas culpa\ndolorem ratione eos id repellendus et\ndolore est nostrum in dolor dolorum neque consequatur eos"
			}, {
				"words": ["dolorem", "et", "nihil"],
				"sentence": "voluptatibus asperiores maxime reprehenderit quas",
				"sentences": "aut ea beatae blanditiis quidem\nquasi maiores quod vero\nperferendis qui voluptates",
				"paragraph": "quo nam omnis assumenda consectetur sed ab architecto voluptas\nrem labore numquam officia tempora quidem mollitia velit\nin voluptas laboriosam dolore consequatur quibusdam\nenim consectetur eum in beatae\nnihil dignissimos sint hic qui nam"
			}]
		}
	}, {
		"name": "Cassie Cassin",
		"email": "Virgie@keanu.io",
		"card": {
			"name": "Merl Pacocha",
			"username": "Nina",
			"email": "Odie@tressie.io",
			"address": {
				"streetA": "Haylie Meadow",
				"streetB": "966 Sporer Greens",
				"streetC": "5483 Rosendo Curve Suite 203",
				"streetD": "Suite 354",
				"city": "West Isom",
				"ukCounty": "Cornwall",
				"ukCountry": "Wales",
				"zipcode": "49246-7282",
				"geo": {
					"lat": "87.2228",
					"lng": "-79.2148"
				}
			},
			"phone": "399.089.9378",
			"website": "tianna.biz",
			"company": {
				"name": "Zulauf-Sanford",
				"catchPhrase": "Synergistic uniform moderator",
				"bs": "reintermediate ubiquitous relationships"
			},
			"posts": [{
				"words": ["numquam", "debitis", "qui"],
				"sentence": "molestiae ex nostrum ut",
				"sentences": "doloremque voluptatem quibusdam occaecati qui aut minus incidunt\niusto est aliquam est fugit nobis vitae eos\nnemo fugit expedita maxime itaque repudiandae iure",
				"paragraph": "dolorum libero nobis quisquam quo sed autem\nmagni nihil distinctio\nveritatis non similique rerum et harum at ut ipsam\nvelit nulla facilis assumenda enim qui molestias sint\nimpedit natus molestias"
			}, {
				"words": ["est", "in", "iusto"],
				"sentence": "nulla rerum sed porro",
				"sentences": "natus enim dolores\nipsam aperiam labore et\nodit numquam officia quam rerum voluptatem",
				"paragraph": "omnis in quae\nqui dolore impedit sapiente voluptas veritatis eum\net voluptatem quidem enim voluptas aspernatur\naut adipisci unde eligendi"
			}, {
				"words": ["harum", "libero", "dolorem"],
				"sentence": "autem repudiandae voluptatem dolore cumque",
				"sentences": "delectus minus sit\ncorporis mollitia quia deserunt porro\nnisi odio quo et possimus",
				"paragraph": "laborum eligendi sint\naccusamus ut praesentium in occaecati qui explicabo molestias voluptas\nfugit qui velit"
			}]
		}
	}, {
		"name": "Lucius Blanda I",
		"email": "Arlo.Rau@wendell.ca",
		"card": {
			"name": "Joany Gorczany",
			"username": "Trudie",
			"email": "Kaley.Mosciski@morgan.tv",
			"address": {
				"streetA": "Abel Drive",
				"streetB": "2572 Wolff Knoll",
				"streetC": "41210 Mueller Knolls Apt. 617",
				"streetD": "Suite 655",
				"city": "Robelmouth",
				"ukCounty": "Avon",
				"ukCountry": "Wales",
				"zipcode": "99332-9290",
				"geo": {
					"lat": "-20.2384",
					"lng": "-86.4283"
				}
			},
			"phone": "1-746-790-7100 x0622",
			"website": "lottie.net",
			"company": {
				"name": "Gulgowski-Roob",
				"catchPhrase": "Assimilated intangible solution",
				"bs": "revolutionize enterprise action-items"
			},
			"posts": [{
				"words": ["beatae", "ad", "non"],
				"sentence": "rerum aut molestiae quo harum",
				"sentences": "aut est dolor fugit non omnis\nlibero officiis temporibus officia qui minima aut voluptatum modi\nexercitationem numquam consequatur nisi consectetur in",
				"paragraph": "consequuntur eos sit architecto modi laboriosam laborum et assumenda\ndicta qui quos exercitationem cum perspiciatis recusandae est rerum\nvoluptatibus consequatur occaecati quaerat itaque labore non ex\nvoluptatem temporibus molestiae perspiciatis fuga nihil aut\net omnis magnam ipsa"
			}, {
				"words": ["et", "et", "libero"],
				"sentence": "voluptas et quasi consequuntur in voluptatum aut officia praesentium",
				"sentences": "in perspiciatis officia atque ab exercitationem facilis quo\nqui quaerat veritatis eos maiores a amet\nharum illum esse hic et a",
				"paragraph": "dolore fugit vel\nreiciendis facilis laboriosam\net aliquid vitae quia velit expedita quam nulla"
			}, {
				"words": ["ducimus", "rerum", "sint"],
				"sentence": "illo nobis omnis quam",
				"sentences": "quidem aut repudiandae voluptas\natque ipsam qui voluptatem deserunt quisquam quis excepturi\nofficia nesciunt quia est",
				"paragraph": "ipsam vero sed tempora ut temporibus placeat cum\nodit optio labore et quibusdam molestiae voluptatibus\nrerum sed eveniet ut quibusdam et\nconsequatur ut est"
			}]
		}
	}, {
		"name": "Jevon Miller",
		"email": "Willa_Doyle@johann.biz",
		"card": {
			"name": "Gloria Bosco",
			"username": "Lionel",
			"email": "Lillian@alfreda.io",
			"address": {
				"streetA": "Hester Well",
				"streetB": "1471 Ferry Roads",
				"streetC": "0670 Mohr Well Suite 297",
				"streetD": "Suite 213",
				"city": "Annieport",
				"ukCounty": "Bedfordshire",
				"ukCountry": "Scotland",
				"zipcode": "08673",
				"geo": {
					"lat": "0.1877",
					"lng": "-159.8775"
				}
			},
			"phone": "(732)403-3056",
			"website": "domenic.name",
			"company": {
				"name": "Tillman, Jewess and Hessel",
				"catchPhrase": "Cross-platform solution-oriented time-frame",
				"bs": "incentivize front-end e-markets"
			},
			"posts": [{
				"words": ["quo", "laboriosam", "doloribus"],
				"sentence": "inventore quis ratione neque voluptatem",
				"sentences": "sit quis magnam sequi adipisci voluptas earum perspiciatis\nducimus et eius voluptas vitae dicta sed quo rem\nquidem repellendus nulla aut ipsam",
				"paragraph": "necessitatibus velit dicta molestias sed aut\nasperiores atque consequatur quidem veniam aut\ndolores hic quisquam"
			}, {
				"words": ["odit", "beatae", "architecto"],
				"sentence": "temporibus et repellat minima deleniti quia vitae",
				"sentences": "culpa a illo non maxime\nnobis id exercitationem praesentium\nut quod minima molestias consequatur illo eligendi asperiores est",
				"paragraph": "sequi corrupti quo quisquam nobis dolor qui est\nsed labore animi mollitia\nnemo quia dignissimos rerum"
			}, {
				"words": ["sed", "iste", "ratione"],
				"sentence": "dolores qui sed quo et id velit excepturi deleniti",
				"sentences": "enim hic consequatur enim ratione\nnostrum ut aut ut ut voluptatibus asperiores inventore\nsuscipit quasi hic iste nihil quo omnis",
				"paragraph": "consectetur nemo asperiores quo est distinctio non non\nsunt velit cum a sit mollitia in et\nquaerat facilis et consequatur similique nam exercitationem\nducimus qui exercitationem at quo sed qui\nmaxime nihil iure voluptas libero"
			}]
		}
	}, {
		"name": "Gudrun Predovic",
		"email": "Neoma@peyton.com",
		"card": {
			"name": "Claire Torp",
			"username": "Abel",
			"email": "Emery.Schimmel@ryley.net",
			"address": {
				"streetA": "Lincoln Prairie",
				"streetB": "83836 Jordane Causeway",
				"streetC": "0999 Davis Freeway Apt. 112",
				"streetD": "Apt. 684",
				"city": "South Gaylordmouth",
				"ukCounty": "West Midlands",
				"ukCountry": "Northern Ireland",
				"zipcode": "00477",
				"geo": {
					"lat": "67.2891",
					"lng": "-145.6493"
				}
			},
			"phone": "088-857-4378 x30270",
			"website": "tina.us",
			"company": {
				"name": "Runte and Daughters",
				"catchPhrase": "Sharable object-oriented analyzer",
				"bs": "reintermediate back-end applications"
			},
			"posts": [{
				"words": ["ab", "velit", "voluptatem"],
				"sentence": "tempore quam deserunt sit ut sunt quia",
				"sentences": "et officiis dolorum nisi dolorem architecto\nest et odio\nofficia ex aut nam",
				"paragraph": "rem omnis natus fugiat\ndistinctio omnis consequatur illum expedita\nsaepe porro dolores tempora hic eius nihil\nipsum omnis rerum dolor quia provident iure maiores"
			}, {
				"words": ["est", "numquam", "qui"],
				"sentence": "sunt suscipit ipsam quia vitae minima explicabo exercitationem",
				"sentences": "molestiae rerum rerum voluptas\net voluptatem adipisci\nest tempore nulla quaerat rerum quo est quia odio",
				"paragraph": "eaque dolorem earum quibusdam placeat\nut ipsam tempora accusantium nihil\nsint voluptas ducimus at nesciunt\ntemporibus sequi et expedita beatae"
			}, {
				"words": ["qui", "asperiores", "fugiat"],
				"sentence": "quia praesentium quo tempora perferendis deserunt veritatis",
				"sentences": "beatae in occaecati\nbeatae eos optio pariatur nam eligendi occaecati\net qui ut est temporibus sapiente",
				"paragraph": "saepe est iure quod\nsed labore non ratione necessitatibus voluptas\naliquid beatae officia aut molestiae\nvoluptatem omnis deserunt consequatur"
			}]
		}
	}, {
		"name": "Karson Halvorson",
		"email": "Nola@allison.co.uk",
		"card": {
			"name": "Jaquelin Skiles",
			"username": "Zaria.Schimmel",
			"email": "Dovie_Collier@martin.com",
			"address": {
				"streetA": "Sanford Trace",
				"streetB": "961 Deckow Via",
				"streetC": "3051 Mertz Stravenue Apt. 344",
				"streetD": "Apt. 310",
				"city": "Lake Thaliachester",
				"ukCounty": "Gwynedd County",
				"ukCountry": "Wales",
				"zipcode": "85087",
				"geo": {
					"lat": "76.1853",
					"lng": "73.3855"
				}
			},
			"phone": "(332)160-5567 x19903",
			"website": "barton.tv",
			"company": {
				"name": "Funk-Mueller",
				"catchPhrase": "Enterprise-wide tertiary project",
				"bs": "synthesize enterprise models"
			},
			"posts": [{
				"words": ["magnam", "neque", "voluptate"],
				"sentence": "sequi voluptas ipsum sunt nobis accusantium",
				"sentences": "natus aliquid accusamus autem excepturi repellendus eaque quo et\net enim natus\ndolorum quisquam amet quasi et ad",
				"paragraph": "qui voluptatibus optio quis illum et\nlibero fugit aut qui qui eligendi similique\nlibero voluptatem id et eum"
			}, {
				"words": ["sit", "pariatur", "eligendi"],
				"sentence": "iure similique nobis voluptatem omnis quod est sequi",
				"sentences": "repudiandae voluptas molestiae natus velit magnam reprehenderit itaque\nexcepturi sed non quae placeat quasi facilis aut voluptatum\npossimus nostrum esse assumenda animi fugit voluptates ut",
				"paragraph": "consequatur vel magnam alias exercitationem\net deserunt recusandae\nipsa quidem ex facilis a voluptate"
			}, {
				"words": ["dolor", "aut", "et"],
				"sentence": "quisquam accusamus sed necessitatibus",
				"sentences": "doloribus nulla quibusdam odit eos natus impedit pariatur\nvel eos delectus\ndistinctio et commodi consectetur et",
				"paragraph": "vel quos quia at ab est\nalias natus minima quaerat ad corrupti est\nnesciunt dignissimos id iure\nneque cum dolore"
			}]
		}
	}, {
		"name": "Marco Haag",
		"email": "Hiram@casimir.info",
		"card": {
			"name": "Lillie Murray",
			"username": "Emilia.Nicolas",
			"email": "Mason.Stroman@ashlee.name",
			"address": {
				"streetA": "Aracely Pike",
				"streetB": "86006 Shane Fork",
				"streetC": "91028 Dante Roads Suite 915",
				"streetD": "Suite 523",
				"city": "Haskellburgh",
				"ukCounty": "Gwent",
				"ukCountry": "Wales",
				"zipcode": "08001-7260",
				"geo": {
					"lat": "38.3772",
					"lng": "-159.4477"
				}
			},
			"phone": "1-468-993-8539",
			"website": "tyra.biz",
			"company": {
				"name": "Stamm and Sons",
				"catchPhrase": "Digitized analyzing pricing structure",
				"bs": "exploit best-of-breed content"
			},
			"posts": [{
				"words": ["provident", "voluptates", "dolore"],
				"sentence": "non voluptatem quaerat fugiat voluptatem",
				"sentences": "nihil eius voluptas sed ut non necessitatibus iste\nenim amet vero excepturi autem\nrepellendus saepe nisi",
				"paragraph": "nihil consectetur quaerat iste ut\ncum sit quam ut\nest fuga cum perferendis aliquid blanditiis facere tempore\nalias explicabo sapiente\nquis qui doloribus optio"
			}, {
				"words": ["et", "commodi", "eaque"],
				"sentence": "ad veritatis ut",
				"sentences": "repellat soluta fugiat\net consequatur eos sed voluptas et unde tenetur\ncorrupti commodi tempora magni voluptates et distinctio quos",
				"paragraph": "explicabo temporibus aut et quidem et\ndolor veniam in ipsam et officiis\nullam et eveniet quis placeat qui quia\nquia occaecati autem expedita asperiores"
			}, {
				"words": ["quo", "tenetur", "excepturi"],
				"sentence": "exercitationem tempore aliquid est laborum",
				"sentences": "sit voluptatem atque fugit dolor molestias reiciendis nulla\nquos quasi rerum dolor incidunt ipsam\nitaque sit ipsam",
				"paragraph": "iste minima delectus voluptatem architecto aut voluptas est voluptate\nincidunt est velit quidem\nanimi et ex dolor eaque\nrerum dolore labore reprehenderit\nfacere culpa illum corrupti enim"
			}]
		}
	}];
	/*users = [];
		for (var i = 0; i < 10; i++) {
			var randomName = Faker.Name.findName(); 
			var randomEmail = Faker.Internet.email(); 
			var randomCard = Faker.Helpers.createCard(); 
			users.push({
				'name': randomName,
				'email': randomEmail,
				'card': randomCard
			});
		}
		return users;*/
}