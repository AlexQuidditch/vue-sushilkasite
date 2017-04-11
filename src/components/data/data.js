const store = {
	rolls: [{
		id: "001",
		name: "Вега",
		type: "ролл",
		picture: "/rolls/vega.jpg",
		description: "Рис, огурец, авокадо, хияше вакаме, кунжут, нори",
		weight: "210",
		price: "199",
		quantity: "1",
		summ: "0"
	}, {
		id: "002",
		name: "Гари",
		type: "ролл",
		picture: "/rolls/gari.jpg",
		description: "Рис, крабовые палочки, лосось, авокадо, тобико, нори",
		weight: "200",
		price: "199",
		quantity: "1"
	}, {
		id: "003",
		name: "Бука",
		type: "ролл",
		picture: "/rolls/buka.jpg",
		description: "Рис, мидии, болгарский перец, чесночный соус, кунжут, нори",
		weight: "200",
		price: "129",
		quantity: "1"
	}, {
		id: "004",
		name: "Капа хосомаки",
		type: "ролл",
		picture: "/rolls/kapa-hosomaki.jpg",
		description: "Рис, огурец, кунжут, нори",
		weight: "150",
		price: "99",
		quantity: "1"
	}, {
		id: "005",
		name: "Лава",
		type: "ролл",
		picture: "/rolls/lava.jpg",
		description: "Рис, сливочный сыр, лосось жареный, соус Лава, нори",
		weight: "250",
		price: "279",
		quantity: "1"
	}, {
		id: "006",
		name: "Нью-Йорк маки",
		type: "ролл",
		picture: "/rolls/new-york-maki.jpg",
		description: "Рис, сливочный сыр, лосось холодного копчения, тобико, кунжут, нори",
		weight: "250",
		price: "219",
		quantity: "1"
	}, {
		id: "007",
		name: "Грин ролл",
		type: "ролл",
		picture: "/rolls/green-roll.jpg",
		description: "Рис, сливочный сыр, курица, помидор, салат, соус Цезарь, нори",
		weight: "230",
		price: "189",
		quantity: "1"
	}, {
		id: "008",
		name: "Сырный ролл",
		type: "ролл",
		picture: "/rolls/cheese-roll.jpg",
		description: "Рис, сливочный сыр, сыр Чедар, нори",
		weight: "230",
		price: "169",
		quantity: "1"
	}, {
		id: "009",
		name: "Аляска",
		type: "ролл",
		picture: "/rolls/alaska.jpg",
		description: "Рис, сливочный сыр, лосось холодного копчения, авокадо, креветка, нори",
		weight: "220",
		price: "259",
		quantity: "1"
	}, {
		id: "010",
		name: "Банито маки",
		type: "ролл",
		picture: "/rolls/bonito-maki.jpg",
		description: "Рис, сливочный сыр, огурец, угорь, стружка тунца, нори",
		weight: "220",
		price: "219",
		quantity: "1"
	}, {
		id: "011",
		name: "Кунсей капа",
		type: "ролл",
		picture: "/rolls/kunsei-cappa.jpg",
		description: "Рис, сливочный сыр, огурец, лосось холодного копчения, кунжут, нори",
		weight: "220",
		price: "229",
		quantity: "1"
	}, {
		id: "012",
		name: "Золотой унаги дракон",
		type: "ролл",
		picture: "/rolls/gold-unagi-dragon.jpg",
		description: "Рис, угорь, авокадо, кунжут, нори, унаги соус",
		weight: "210",
		price: "259",
		quantity: "1"
	}, {
		id: "013",
		name: "Икура сомаки",
		type: "ролл",
		picture: "/rolls/ikura-somaki.jpg",
		description: "Рис, сливочный сыр, икра лосося, нори",
		weight: "210",
		price: "279",
		quantity: "1"
	}, {
		id: "014",
		name: "Мадагаскар",
		type: "ролл",
		picture: "/rolls/madagascar.jpg",
		description: "Рис, окунь жареный, зелёный лук, тобико, кунжут, соус унаги, нори",
		weight: "230",
		price: "229",
		quantity: "1"
	}, {
		id: "015",
		name: "Майами",
		type: "ролл",
		picture: "/rolls/mayami.jpg",
		description: "Рис, сливочный сыр, огурец, лосось копчёный, укроп, нори",
		weight: "220",
		price: "199",
		quantity: "1"
	}, {
		id: "016",
		name: "Йоджи маки",
		type: "ролл",
		picture: "/rolls/yodghi-maki.jpg",
		description: "Рис, угорь, сливочный сыр, огурец, имбирь, нори",
		weight: "260",
		price: "380",
		quantity: "1"
	}, {
		id: "017",
		name: "Cин унаги",
		type: "ролл",
		picture: "/rolls/sin-unagi.jpg",
		description: "Рис, сливочный сыр, угорь, авокадо, соус унаги, кунжут, нори",
		weight: "220",
		price: "249",
		quantity: "1"
	}, {
		id: "018",
		name: "Скандинавия",
		type: "ролл",
		picture: "/rolls/skandinavia.jpg",
		description: "Рис, сливочный сыр, копчёный лосось, зелёный лук, нори",
		weight: "220",
		price: "279",
		quantity: "1"
	}, {
		id: "019",
		name: "Калифорния с креветкой",
		type: "ролл",
		picture: "/rolls/california-krevets.jpg",
		description: "Рис, креветка, огурец, майонез, тобико, нори",
		weight: "240",
		price: "259",
		quantity: "1"
	}, {
		id: "020",
		name: "Филадельфия делюкс",
		type: "ролл",
		picture: "/rolls/philadelphia-delux.jpg",
		description: "Рис, семга, японский омлет тамаго, сливочный сыр, икра лосося, нори",
		weight: "270",
		price: "289",
		quantity: "1"
	}, {
		id: "021",
		name: "Тори ролл",
		type: "ролл",
		picture: "/rolls/tori-roll.jpg",
		description: "Рис, курица, огурец, авокадо, майонез, лук зелёный, нори",
		weight: "210",
		price: "189",
		quantity: "1"
	}, {
		id: "022",
		name: "Саяке маки",
		type: "ролл",
		picture: "/rolls/sayake-maki.jpg",
		description: "Рис, сыр сливочный, лосось, авокадо, копчёный угорь, огурец, соус унаги, кунжут, нори",
		weight: "250",
		price: "279",
		quantity: "1"
	}, {
		id: "023",
		name: "Хауз ролл",
		type: "ролл",
		picture: "/rolls/khaz-roll.jpg",
		description: "Рис, огурец, тунец, майонез, нори",
		weight: "200",
		price: "179",
		quantity: "1"
	}, {
		id: "024",
		name: "Шахматы роллы",
		type: "ролл",
		picture: "/rolls/chess.jpg",
		description: "Рис, огурец, омлет, тигровая креветка, сливочный сыр, сёмга, икра тобико, кунжут, нори",
		weight: "250",
		price: "259",
		quantity: "1"
	}, {
		id: "025",
		name: "Филадельфия",
		type: "ролл",
		picture: "/rolls/philadelfia.jpg",
		description: "Рис, сыр сливочный, слабосоленый лосось, нори",
		weight: "220",
		price: "249",
		quantity: "1"
	}, {
		id: "26",
		name: "Цезарь ролл",
		type: "ролл",
		picture: "/rolls/tsezar-roll.jpg",
		description: "Рис, курица, огурец, сыр пармезан, соус цезарь, кунжут, нори",
		weight: "230",
		price: "159",
		quantity: "1"
	}, {
		id: "027",
		name: "Филадельфия с луком",
		type: "ролл",
		picture: "/rolls/philadelphia-green.jpg",
		description: "Рис, сыр сливочный, слабосолёная сёмга, зелёный лук, нори",
		weight: "240",
		price: "249",
		quantity: "1"
	}, {
		id: "028",
		name: "Кавагиши",
		type: "ролл",
		picture: "/rolls/kawagishi.jpg",
		description: "Рис, мидии, огурец, кунжут, нори",
		weight: "200",
		price: "129",
		quantity: "1"
	}, {
		id: "029",
		name: "Зелёный дракон",
		type: "ролл",
		picture: "/rolls/green-dragon.jpg",
		description: "Рис, слабосоленый лосось, сыр сливочный, угорь, огурец, лук зеленый, икра тобико, соус унаги, нори",
		weight: "250",
		price: "299",
		quantity: "1"
	}, {
		id: "030",
		name: "Гейша",
		type: "ролл",
		picture: "/rolls/geisha.jpg",
		description: "Рис, сливочный сыр, слабосоленый лосось, огурец, нори",
		weight: "210",
		price: "199",
		quantity: "1"
	}, {
		id: "031",
		name: "Инь-Янь",
		type: "ролл",
		picture: "/rolls/in-yan.jpg",
		description: "Рис, лосось, болагрский перец, сыр сливочный, огурец, соус унаги, кунжут, нори",
		weight: "210",
		price: "209",
		quantity: "1"
	}, {
		id: "032",
		name: "Калифорния",
		type: "ролл",
		picture: "/rolls/california.jpg",
		description: "Рис, снежный краб, огурец, авокадо, икра тобико, майонез, нори",
		weight: "230",
		price: "249",
		quantity: "1"
	}, {
		id: "033",
		name: "Канада",
		type: "ролл",
		picture: "/rolls/canada.jpg",
		description: "Рис, сыр сливочный, угорь, копченый лосось, авокадо, кунжут, соус унаги, нори",
		weight: "260",
		price: "279",
		quantity: "1"
	}, {
		id: "034",
		name: "Нежный угорь",
		type: "ролл",
		picture: "/rolls/sweet-ugor.jpg",
		description: "Рис, сливочный сыр, угорь, авокадо, кунжут, нори",
		weight: "230",
		price: "229",
		quantity: "1"
	}, {
		id: "035",
		name: "Планета маки",
		type: "ролл",
		picture: "/rolls/planeta-maki.jpg",
		description: "Рис, сыр сливочный, слабосолёный лосоь, такуан, салат, нори",
		weight: "210",
		price: "199",
		quantity: "1"
	}, {
		id: "036",
		name: "Онигара",
		type: "ролл",
		picture: "/rolls/onigara.jpg",
		description: "Рис, сыр сливочный, угорь, такуан, соус унаги, кунжут, нори",
		weight: "250",
		price: "299",
		quantity: "1"
	}, {
		id: "037",
		name: "Саяке унаги маки",
		type: "ролл",
		picture: "/rolls/sayake-unagi-roll.jpg",
		description: "Рис, сливочный сыр, огурец, слабосоленый лосось, угорь, тобико, унаги соус, нори",
		weight: "240",
		price: "249",
		quantity: "1"
	}, {
		id: "038",
		name: "Филадельфия с огурцом",
		type: "ролл",
		picture: "/rolls/philadelfia-ogurets.jpg",
		description: "Рис, сыр сливочный, слабосоленый лосось, огурец, нори",
		weight: "240",
		price: "249",
		quantity: "1"
	}, {
		id: "039",
		name: "Унаги ролл",
		type: "ролл",
		picture: "/rolls/unagi.jpg",
		description: "Рис, огурец, угорь, соус унаги, кунжут, нори",
		weight: "220",
		price: "219",
		quantity: "1"
	}, {
		id: "040",
		name: "Унаги маки ролл",
		type: "ролл",
		picture: "/rolls/unagi-maki.jpg",
		description: "Рис, огурец, копчёный угорь, кунжут, соус унаги, нори",
		weight: "200",
		price: "189",
		quantity: "1"
	}, {
		id: "041",
		name: "Унаги тидзу",
		type: "ролл",
		picture: "/rolls/unagi-titzu.jpg",
		description: "Рис, сливочный сыр, угорь, огурец, слабосоленый лосось, нори",
		weight: "250",
		price: "249",
		quantity: "1"
	}, {
		id: "042",
		name: "Фудзияма",
		type: "ролл",
		picture: "/rolls/phudziyama.jpg",
		description: "Рис, сливочный сыр, мидии, омлет, угорь, огурец, нори",
		weight: "260",
		price: "249",
		quantity: "1"
	}, {
		id: "043",
		name: "Экспресс",
		type: "ролл",
		picture: "/rolls/express.jpg",
		description: "Рис, сливочный сыр, куриное филе, огурец, кунжут белый и чёрный, тобико, нори",
		weight: "260",
		price: "229",
		quantity: "1"
	}, {
		id: "044",
		name: "Филадельфия с креветкой",
		type: "ролл",
		picture: "/rolls/philadelfia-krevets.jpg",
		description: "Рис, сыр сливочный, слабосолёный лосось, креветки тигровые, нори",
		weight: "230",
		price: "259",
		quantity: "1"
	}, {
		id: "045",
		name: "Якудза",
		type: "ролл",
		picture: "/rolls/yakudza.jpg",
		description: "Рис, тигровая креветка, пекинская капуста, тобико, зелёный лук, соус спайси, кунжут, нори",
		weight: "210",
		price: "269",
		quantity: "1"
	}, {
		id: "046",
		name: "Норт ролл",
		type: "ролл",
		picture: "/rolls/north-roll.jpg",
		description: "Рис, сыр сливочный, угорь, слабосоленый лосось, тобико, кунжут, нори",
		weight: "250",
		price: "259",
		quantity: "1"
	}, {
		id: "047",
		name: "Окинава",
		type: "ролл",
		picture: "/rolls/okinava.jpg",
		description: "Рис, омлет, огурец, соус с морским гребешком и слабосоленым лососем, японский майонез, нори",
		weight: "230",
		price: "219",
		quantity: "1"
	}, {
		id: "048",
		name: "Унаги филадельфия",
		type: "ролл",
		picture: "/rolls/unagi-filadelfia.jpg",
		description: "Рис, сливочный сыр, огурец, угорь, тобико, нори",
		weight: "240",
		price: "269",
		quantity: "1"
	}, {
		id: "049",
		name: "Гурмэ маки",
		type: "ролл",
		picture: "/rolls/gurme-maki.jpg",
		description: "Рис, сливочный сыр, тунец, слабосоленый лосось, лук зелёный, нори",
		weight: "210",
		price: "229",
		quantity: "1"
	}, {
		id: "050",
		name: "Бостон",
		type: "ролл",
		picture: "/rolls/boston.png",
		description: "Рис, тунец, авокадо, кунжут, тобико, нори",
		weight: "210",
		price: "219",
		quantity: "1"
	}, {
		id: "051",
		name: "Ролл с огурцом",
		type: "Классические роллы",
		picture: "/rolls/roll-ogurets.jpg",
		description: "Рис, огурец, кунжут, нори",
		weight: "100",
		price: "59",
		quantity: "1"
	}, {
		id: "052",
		name: "Ролл с авокадо",
		type: "Классические роллы",
		picture: "/rolls/roll-avocado.jpg",
		description: "Рис, авокадо, нори",
		weight: "100",
		price: "79",
		quantity: "1"
	}, {
		id: "053",
		name: "Ролл с слабосоленым лососем",
		type: "Классические роллы",
		picture: "/rolls/losos-roll.jpg",
		description: "Рис, слабосоленый лосось, нори",
		weight: "100",
		price: "89",
		quantity: "1"
	}, {
		id: "054",
		name: "Ролл с лососем копченым",
		type: "Классические роллы",
		picture: "/rolls/roll-semga.jpg",
		description: "Рис, копченый лосось, нори",
		weight: "100",
		price: "89",
		quantity: "1"
	}, {
		id: "055",
		name: "Ролл с угрем",
		type: "Классические роллы",
		picture: "/rolls/roll-ugor.jpg",
		description: "Рис, угорь, нори",
		weight: "100",
		price: "99",
		quantity: "1"
	}, {
		id: "056",
		name: "Ролл с креветкой",
		type: "Классические роллы",
		picture: "/rolls/krevetka-roll.jpg",
		description: "Рис, тигровая креветка, сыр сливочный",
		weight: "100",
		price: "99",
		quantity: "1"
	}, {
		id: "057",
		name: "Ролл с тунцом",
		type: "Классические роллы",
		picture: "/rolls/roll-tunets.jpg",
		description: "Рис, тунец, нори",
		weight: "100",
		price: "109",
		quantity: "1"
	}],
	baked: [{
		id: "058",
		name: "Запеченный лосось",
		type: "Запеченные роллы",
		picture: "/baked/bokedlosos.jpg",
		description: "Рис, сыр сливочный, слабосоленый лосось, майрнез, соус спайси, тобико, нори",
		weight: "270",
		price: "259",
		quantity: "1"
	}, {
		id: "059",
		name: "Запеченная креветка",
		type: "Запеченные роллы",
		picture: "/baked/krevets.jpg",
		description: "Рис, сливочный сыр, авокадо, креветка тигровая, тобико, кунжут, соус спайси, нори",
		weight: "270",
		price: "259",
		quantity: "1"
	}, {
		id: "060",
		name: "Запеченная филадельфия",
		type: "Запеченные роллы",
		picture: "/baked/philadelfia.jpg",
		description: "Рис, сливочный сыр, слабосоленый лосось, соус спайси, нори",
		weight: "270",
		price: "279",
		quantity: "1"
	}, {
		id: "061",
		name: "Запеченные мидии",
		type: "Запеченные роллы",
		picture: "/baked/midia.jpg",
		description: "Рис, сыр сливочный, снежный краб, мидии, соус спайси, нори",
		weight: "240",
		price: "189",
		quantity: "1"
	}, {
		id: "062",
		name: "Запеченный гребешок",
		type: "Запеченные роллы",
		picture: "/baked/grebeshok.jpg",
		description: "Рис, слабосоленый лосось, морской гребешок, сливочный сыр, соус спайси, нори",
		weight: "240",
		price: "189",
		quantity: "1"
	}, {
		id: "063",
		name: "Запеченный кальмар",
		type: "Запеченные роллы",
		picture: "/baked/calmar.jpg",
		description: "Рис, огурец, кальмар, сливочный сыр, соус спайси, майонез, кунжут, нори",
		weight: "240",
		price: "159",
		quantity: "1"
	}, {
		id: "064",
		name: "Запеченный угорь",
		type: "Запеченные роллы",
		picture: "/baked/ugor.jpg",
		description: "Рис, сливочный сыр, угорь, соус спайси, тобтко, майонез, нори",
		weight: "240",
		price: "229",
		quantity: "1"
	}],
	tempurarolls: [{
		id: "065",
		name: "Унаги темпура",
		type: "Горячие роллы",
		picture: "/tempura/unagi-tempura.jpg",
		description: "Рис, угорь, авокадо, салат, тобико, темпура, нори",
		weight: "250",
		price: "239",
		quantity: "1"
	}, {
		id: "066",
		name: "Цезарь темпура",
		type: "Горячие роллы",
		picture: "/tempura/tsezar-roll.jpg",
		description: "Рис, курица, помидор, соус цезарь, салат, темпура, нори",
		weight: "250",
		price: "199",
		quantity: "1"
	}, {
		id: "067",
		name: "Сяки спайси темпура",
		type: "Горячие роллы",
		picture: "/tempura/syake.jpg",
		description: "Рис, слабосоленый лосось, огурец, соус спайси, темпура, нори",
		weight: "230",
		price: "199",
		quantity: "1"
	}, {
		id: "068",
		name: "Эби спайси темпура",
		type: "Горячие роллы",
		picture: "/tempura/abi-space-tempura.jpg",
		description: "Рис, тигровые креветки, соус спайси, тобико, темпура, нори",
		weight: "230",
		price: "219",
		quantity: "1"
	}, {
		id: "069",
		name: "Чиз темпура",
		type: "Горячие роллы",
		picture: "/tempura/cheese-tempura.jpg",
		description: "Рис, сыр сливочный, слабосоленый лосось, креветка тгровая, темпура, нори",
		weight: "220",
		price: "249",
		quantity: "1"
	}, {
		id: "070",
		name: "Горячая филадельфия",
		type: "Горячие роллы",
		picture: "/tempura/hot-philadelfia.jpg",
		description: "Рис, сыр сливочный, слабосоленый лосось, огурец, авокадо, темпура, нори",
		weight: "250",
		price: "239",
		quantity: "1"
	}, {
		id: "071",
		name: "Горячая гейша",
		type: "Горячие роллы",
		picture: "/tempura/hot-geysha.jpg",
		description: "Рис, сыр сливочный, огурец, креветка тигровая, угорь, темпура, нори",
		weight: "250",
		price: "259",
		quantity: "1"
	}, {
		id: "072",
		name: "Темпура тортилья с лососем",
		type: "Горячие роллы",
		picture: "/tempura/tort-losos.jpg",
		description: "Сыр сливочный, тортилья, копченый лосось, лук зеленый, темпура",
		weight: "300",
		price: "239",
		quantity: "1"
	}, {
		id: "073",
		name: "Темпура тортилья с беконом",
		type: "Горячие роллы",
		picture: "/tempura/tort-becon.jpg",
		description: "Сыр сливочный, тортилья, бекон, овощи, темпура",
		weight: "300",
		price: "249",
		quantity: "1"
	}],
	tempura: [{
		id: "074",
		name: "Кальмары в темпуре",
		type: "Темпура",
		picture: "/tempura/calmars.jpg",
		description: "Кольца кальмара, темпура",
		weight: "100",
		price: "99",
		quantity: "1"
	}, {
		id: "075",
		name: "Креветки в темпуре",
		type: "Темпура",
		picture: "/tempura/krevets.png",
		description: "Тигровые креветки, темпура",
		weight: "120",
		price: "289",
		quantity: "1"
	}, {
		id: "076",
		name: "Овощи в темпуре",
		type: "Темпура",
		picture: "/tempura/ovoschi.jpg",
		description: "Болгарский перец, морковь, кабачок, луковые кольца, темпура",
		weight: "170",
		price: "139",
		quantity: "1"
	}, {
		id: "077",
		name: "Куриное филе в темпуре",
		type: "Темпура",
		picture: "/tempura/kurica.jpg",
		description: "Куриное филе, темпура",
		weight: "150",
		price: "119",
		quantity: "1"
	}, {
		id: "078",
		name: "Рисовые шарики в темпуре",
		type: "Темпура",
		picture: "/tempura/rice.jpg",
		description: "Рис, слабосоленый лосось, соус, темпура",
		weight: "230",
		price: "199",
		quantity: "1"
	}, {
		id: "079",
		name: "Куринные крылья в темпуре",
		type: "Темпура",
		picture: "/tempura/krylya.jpg",
		description: "",
		weight: "6шт",
		price: "249",
		quantity: "1"
	}],
	torts: [{
		id: "081",
		name: "Тортилья с угрем",
		type: "Роллы в торитлье",
		picture: "/torts/ugor.jpg",
		description: "Сырная тортилья, сыр сливочный, угорь, зеленый лук",
		weight: "235",
		price: "289",
		quantity: "1"
	}, {
		id: "082",
		name: "Тортилья с лососем",
		type: "Роллы в торитлье",
		picture: "/torts/losos.jpg",
		description: "Сырная тортилья, сыр сливочный, копченый лосось, огурец, помидор",
		weight: "235",
		price: "219",
		quantity: "1"
	}, {
		id: "083",
		name: "Тортилья с говядиной",
		type: "Роллы в торитлье",
		picture: "/torts/maki-govyadina.jpg",
		description: "Сырная тортилья, сыр сливочный, говядина, огурец, помидор, салат",
		weight: "235",
		price: "199",
		quantity: "1"
	}, {
		id: "084",
		name: "Тортилья с беконом",
		type: "Роллы в торитлье",
		picture: "/torts/becon.jpg",
		description: "Сырная тортилья, сыр сливочный, бекон, помидор, перец, салат",
		weight: "235",
		price: "199",
		quantity: "1"
	}, {
		id: "085",
		name: "Тортилья с курицей",
		type: "Роллы в торитлье",
		picture: "/torts/maki-kurica.jpg",
		description: "Сырная тортилья, сыр сливочный, курица, огурец, помидор, салат",
		weight: "235",
		price: "169",
		quantity: "1"
	}, {
		id: "086",
		name: "Тортилья с овощами",
		type: "Роллы в торитлье",
		picture: "/torts/ovoschi.jpg",
		description: "Сырная тортилья, сыр сливочный, овощи",
		weight: "235",
		price: "169",
		quantity: "1"
	}],
	omlet: [{
		id: "087",
		name: "Принт",
		type: "Роллы в японском омлете",
		picture: "/omlet/print.jpg",
		description: "Рис, сыр сливочный, лосось копченый, авокадо, омлет японский, салат, нори",
		weight: "230",
		price: "159",
		quantity: "1"
	}, {
		id: "088",
		name: "Тамаго эби маки",
		type: "Роллы в японском омлете",
		picture: "/omlet/tamago-maki.jpg",
		description: "Рис, сыр ливочный, тигровая креветка, омлет японский, нори",
		weight: "230",
		price: "199",
		quantity: "1"
	}, {
		id: "089",
		name: "Вегас",
		type: "Роллы в японском омлете",
		picture: "/omlet/vegas.jpg",
		description: "Рис, сыр ливочный, угорь, огурец, авокадо, омлет японский, соус спайси, нори",
		weight: "240",
		price: "169",
		quantity: "1"
	}, {
		id: "090",
		name: "Куцу",
		type: "Роллы в японском омлете",
		picture: "/omlet/kutsu.jpg",
		description: "Рис, сыр ливочный, курица, помидор, омлет японский, салат, нори",
		weight: "240",
		price: "149",
		quantity: "1"
	}, {
		id: "091",
		name: "Филадельфия в омлете",
		type: "Роллы в японском омлете",
		picture: "/omlet/philadelfia-omlet.jpg",
		description: "Рис, сыр ливочный, авокадо, омлет японский, тобико, нори",
		weight: "220",
		price: "129",
		quantity: "1"
	}, {
		id: "092",
		name: "Чакин икура",
		type: "Роллы в японском омлете",
		picture: "/omlet/chakin-ikura.jpg",
		description: "Рис, сыр ливочный, омлет японский, икра лосося, нори",
		weight: "220",
		price: "209",
		quantity: "1"
	}],
	sushi: [{
		id: "093",
		name: "Сяке",
		type: "Суши",
		picture: "/sushi/syake-sushi.jpg",
		description: "Рис, слабосоленый лосось",
		weight: "35",
		price: "39",
		quantity: "1"
	}, {
		id: "094",
		name: "Унаги",
		type: "Суши",
		picture: "/sushi/unagi-sushi.jpg",
		description: "Рис, угорь, нори",
		weight: "35",
		price: "59",
		quantity: "1"
	}, {
		id: "095",
		name: "Эби",
		type: "Суши",
		picture: "/sushi/ebi-sushi.jpg",
		description: "Рис, тигровая креветка",
		weight: "35",
		price: "69",
		quantity: "1"
	}],
	salats: [{
		id: "096",
		name: "Умисай гюнику",
		type: "Салаты",
		picture: "/salats/guneku.jpg",
		description: "Острая говядина, болгарский перец, грибы, морковь, лук, перец чили, чеснок",
		weight: "200",
		price: "209",
		quantity: "1"
	}, {
		id: "097",
		name: "Сяки сарада",
		type: "Салаты",
		picture: "/salats/sarada.jpg",
		description: "Пеконская капуста, салат, помидор, лук, морковь, слабосоленый лосось, соус",
		weight: "200",
		price: "229",
		quantity: "1"
	}, {
		id: "098",
		name: "Тикен сарада",
		type: "Салаты",
		picture: "/salats/sarada.jpg",
		description: "Салат, пекинская капуста, морковь, перец болгарский, помидор, лук, курица, соус",
		weight: "210",
		price: "199",
		quantity: "1"
	}, {
		id: "099",
		name: "Цезарь с креветкой",
		type: "Салаты",
		picture: "/salats/tsezar-krevets.jpg",
		description: "Салат, помдор, сыр, яйцо, сухари, креветки, соус",
		weight: "230",
		price: "299",
		quantity: "1"
	}, {
		id: "100",
		name: "Цезарь с курицей",
		type: "Салаты",
		picture: "/salats/tsezar-kurica.jpg",
		description: "Салат, помдор, сыр, яйцо, сухари, курица, соус",
		weight: "230",
		price: "189",
		quantity: "1"
	}, {
		id: "101",
		name: "Киото",
		type: "Салаты",
		picture: "/salats/kioto.jpg",
		description: "Свиная шея, морковь, перец болгарский, лук, капуста пекинская, лист салата, кунжут, соус",
		weight: "230",
		price: "229",
		quantity: "1"
	}],
	rice: [{
		id: "102",
		name: "Рис с креветками",
		type: "Рис, лапша",
		picture: "/rice/rice-krevets.jpg",
		description: "Рис, креветки тигровые, омлет японский, соус",
		weight: "290",
		price: "199",
		quantity: "1"
	}, {
		id: "103",
		name: "Рис с говядиной",
		type: "Рис, лапша",
		picture: "/rice/rice-telyatina.jpg",
		description: "Рис, говядина, овощи, соус",
		weight: "290",
		price: "189",
		quantity: "1"
	}, {
		id: "104",
		name: "Рис со свининой",
		type: "Рис, лапша",
		picture: "/rice/rice-telyatina.jpg",
		description: "Рис, свинина, овощи, соус",
		weight: "290",
		price: "189",
		quantity: "1"
	}, {
		id: "105",
		name: "Рис с курицей",
		type: "Рис, лапша",
		picture: "/rice/rice-kurica.jpg",
		description: "Рис, курица, овощи, соус",
		weight: "290",
		price: "179",
		quantity: "1"
	}, {
		id: "106",
		name: "Рис с овощами",
		type: "Рис, лапша",
		picture: "/rice/rice-ovoschi.jpg",
		description: "Рис, овощи",
		weight: "290",
		price: "169",
		quantity: "1"
	}, {
		id: "107",
		name: "Лапша с говядиной",
		type: "Рис, лапша",
		picture: "/rice/lapsha-govyadina.jpg",
		description: "Лапша соба (гречневая), говядина, овощи",
		weight: "300",
		price: "229",
		quantity: "1"
	}, {
		id: "108",
		name: "Лапша со свининой",
		type: "Рис, лапша",
		picture: "/rice/lapsha-govyadina.jpg",
		description: "Лапша соба (гречневая), свинина, овощи",
		weight: "300",
		price: "229",
		quantity: "1"
	}, {
		id: "109",
		name: "Лапша с курицей",
		type: "Рис, лапша",
		picture: "/rice/lapsha-kurica.jpg",
		description: "Лапша соба (гречневая), курица, овощи, кунжут",
		weight: "300",
		price: "219",
		quantity: "1"
	}, {
		id: "110",
		name: "Лапша с морепродуктами",
		type: "Рис, лапша",
		picture: "/rice/lapsha-more.jpg",
		description: "Лапша удон, морепродукты, блинчик",
		weight: "300",
		price: "259",
		quantity: "1"
	}, {
		id: "111",
		name: "Лапша с копченостями",
		type: "Рис, лапша",
		picture: "/rice/lapsha-kopchenosti.jpg",
		description: "Лапша удон, копчености, сливки, перец чили",
		weight: "300",
		price: "219",
		quantity: "1"
	}, {
		id: "112",
		name: "Фунчоза с говядиной",
		type: "Рис, лапша",
		picture: "/rice/lapsha-govyadina.jpeg",
		description: "Фунчоза, говядина, овощи, соус",
		weight: "290",
		price: "229",
		quantity: "1"
	}, {
		id: "113",
		name: "Фунчоза со свининой",
		type: "Рис, лапша",
		picture: "/rice/funchosa-svinina.jpg",
		description: "Фунчоза, свинина, овощи, соус",
		weight: "290",
		price: "229",
		quantity: "1"
	}, {
		id: "114",
		name: "Фунчоза с курицей",
		type: "Рис, лапша",
		picture: "/rice/funchosa-kurica.jpg",
		description: "Фунчоза, курица, овощи, соус",
		weight: "290",
		price: "219",
		quantity: "1"
	}],
	sets: [{
		id: "115",
		name: "Набор Мини",
		type: "Наборы",
		picture: "/sets/mini.jpg",
		description: "Калифорния 1/2, Майами 1/2, Нежный угорь 1/2, 1 соус, 1 вассаби, 1 имбирь",
		weight: "12шт, 340",
		price: "329",
		quantity: "1"
	}, {
		id: "116",
		name: "Набор №1",
		type: "Наборы",
		picture: "/sets/set-1.jpg",
		description: "Скандинавия 1/2, Майами 1/2, Филадельфия, ролл со слабосоленым лососем, суши сяке 2шт, 2 соуса, 2 вассаби, 2 имбиря",
		weight: "24шт, 610",
		price: "749",
		quantity: "1"
	}, {
		id: "117",
		name: "Набор №2",
		type: "Наборы",
		picture: "/sets/set-2.jpg",
		description: "Ролл со слабосоленым лососем, ролл с копченым лососем, ролл с угрем, ролл с креветкой, ролл с огурцом, ролл с авокадо, 2 соуса, 2 вассаби, 2 имбиря",
		weight: "36шт, 600",
		price: "499",
		quantity: "1"
	}, {
		id: "118",
		name: "Набор № 3",
		type: "Наборы",
		picture: "/sets/set-3.jpg",
		description: "Дракон, калифорния, аляска, филадельфия, ролл с креветкой, грин ролл, кунсей капа, унаги темпура, якудза, 4 соуса, 4 васаби, 4 имбиря",
		weight: "70 шт, 1890",
		price: "1899",
		quantity: "1"
	}, {
		id: "119",
		name: "Набор Ассорти",
		type: "Наборы",
		picture: "/sets/assorti.jpg",
		description: "Ролл с креветкой, аляска, дракон, калифорния, 2 соуса, 2 васаби, 2 имбиря",
		weight: "30 шт, 760",
		price: "899",
		quantity: "1"
	}, {
		id: "120",
		name: "Набор Тортилья",
		type: "Наборы",
		picture: "/sets/torts.jpg",
		description: "Тортилья с угрём, тортилья с лососем, тортилья с говядиной, тортилья с беконом, тортилья с курицей, 3 соуса, 3 васаби, 3 имбиря",
		weight: "40 шт, 1170",
		price: "1049",
		quantity: "1"
	}, {
		id: "121",
		name: "Набор Дракон",
		type: "Наборы",
		picture: "/sets/dragon.jpg",
		description: "Филадельфия с огурцом, скандинавия, капа хосомаки, канада, ролл с огурцом, ролл с авокадо, ролл с тунцом, ролл с сёмгой, бостон, фудзияма, куцу, принт, майами, син унаги, горячая гейша, калифорния, нежный угорь 126 шт., 7 соусов, 7 васаби, 7 имбиря",
		weight: "126 шт, 3300",
		price: "2999",
		quantity: "1"
	}, {
		id: "122",
		name: "Набор Филадельфия",
		type: "Наборы",
		picture: "/sets/philadelfia.jpg",
		description: "Филадельфия, Филадельфия с огурцом, Филадельфия с луком, Гейша, 2 соуса, 2 вассаби, 2 имбиря",
		weight: "32 шт, 910",
		price: "999",
		quantity: "1"
	}, {
		id: "123",
		name: "Набор Гурман",
		type: "Наборы",
		picture: "/sets/gurman.jpg",
		description: "Ролл со слабосоленым лососем, ролл с копченым лососем, ролл с тунцом, ролл с креветкой, ролл с огурцом, Икура сомаки, Калифорния, Филадельфия с огурцом, Банито маки, 4 соуса, 4 вассаби, 4 имбиря",
		weight: "62 шт, 1400",
		price: "1399",
		quantity: "1"
	}, {
		id: "124",
		name: "Набор Фудзи",
		type: "Наборы",
		picture: "/sets/fudsi.jpg",
		description: "Гейша 1/2, Планета 1/2, Филадельфия с огурцом 1/2, Филадельфия с креветкой 1/2, Канада, 2 соуса, 2 вассаби, 2 имбиря",
		weight: "24шт, 700",
		price: "749",
		quantity: "1"
	}, {
		id: "125",
		name: "Набор Токио",
		type: "Наборы",
		picture: "/sets/tokio.jpg",
		description: "Филадельфия, Калифорния, Икура сомаки, Планета, Лава, 3 соуса, 3 вассаби, 3 имбиря",
		weight: "40шт, 1120",
		price: "1240",
		quantity: "1"
	}, {
		id: "126",
		name: "Набор Оригами",
		type: "Наборы",
		picture: "/sets/origami.jpg",
		description: "Грин ролл 1/2, Сырный 1/2, Гейша 1/2, Планета 1/2, Филадельфия с огурцом 1/2, Филадельфия с креветкой 1/2, Унаги филадельфия, Тортилья с лососем, 3 соуса, 3 вассаби, 3 имбиря",
		weight: "40 шт, 1150",
		price: "1199",
		quantity: "1"
	}],
	sauces: [{
		id: "127",
		name: "Имбирь",
		type: "соус",
		picture: "/sauces/imbir.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "128",
		name: "Соевый соус",
		type: "соус",
		picture: "/sauces/soya.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "129",
		name: "Васаби",
		type: "соус",
		picture: "/sauces/wasabi.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "130",
		name: "Терияки",
		type: "соус",
		picture: "/sauces/teryaki.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "131",
		name: "Цезарь-соус",
		type: "соус",
		picture: "/sauces/tsezar-sauce.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "132",
		name: "Сливочный соус",
		type: "соус",
		picture: "/sauces/slive.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "133",
		name: "Соус с зеленью",
		type: "соус",
		picture: "/sauces/zelen.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "134",
		name: "Унаги соус",
		type: "соус",
		picture: "/sauces/unagi.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "135",
		name: "Чесночный соус",
		type: "соус",
		picture: "/sauces/chestnok.jpg",
		price: "20",
		quantity: "1"
	}, {
		id: "136",
		name: "Соус спайси",
		type: "соус",
		picture: "/sauces/sauce-space.jpg",
		price: "20",
		quantity: "1"
	}],
	deserts: [{
		id: "137",
		name: "Чизкейк в ассортименте",
		type: "Десерты",
		picture: "/deserts/cake.jpg",
		description: "Шоколадный, Клубничный, Классический",
		weight: "100",
		price: "100",
		quantity: "1"
	}, {
		id: "138",
		name: "Картофель фри",
		type: "Десерты",
		picture: "/deserts/fri.jpg",
		weight: "100",
		price: "100",
		quantity: "1"
	}],
	drinks: [{
		id: "139",
		name: "Coca-Cola",
		type: "напитки",
		picture: "/drinks/cola.jpg",
		weight: "1",
		price: "70",
		quantity: "1"
	}, {
		id: "140",
		name: "Fanta",
		type: "напитки",
		picture: "/drinks/fanta.png",
		weight: "1",
		price: "70",
		quantity: "1"
	}, {
		id: "141",
		name: "Sprite",
		type: "напитки",
		picture: "/drinks/sprite.png",
		weight: "1",
		price: "70",
		quantity: "1"
	}, {
		id: "142",
		name: "Nestea",
		type: "напитки",
		picture: "/drinks/nestea.png",
		weight: "0.5",
		price: "55",
		quantity: "1"
	}]
};
export default {
	store
};
