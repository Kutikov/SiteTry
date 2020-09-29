const infos = [
	{
		"date": 2,
		"time": "10:00",
		"title": "Внутрішня медицина та клінічні випадки",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 6й поверх, ауд. 678",
		"moderators": [
			{
				"surname": " Иванишина (Кульминская)",
				"name": "Владислава ",
				"middle_name": "Юрьевна",
				"tel": "+380663213314"
			},
			{
				"surname": "Голобородько",
				"name": "Анастасия",
				"middle_name": "Александровна",
				"tel": "+380979272644"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/4754417420?pwd=ZjhGdGx4OTBKd3RBK0M0MURod3U5Zz09",
			"password": "u2fuBF"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Хірургія",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 5й поверх, ауд. 581",
		"moderators":[
			{
				"surname": "Сердюк",
				"name": "Катерина",
				"middle_name": "Олексіївна",
				"tel": "+380661287800"
			},
			{
				"surname": "Садрідінов",
				"name": "Далер",
				"middle_name": "Джамолович",
				"tel": "+380995040827"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/74885472544?pwd=S2ptUEQ0VUhHOVlQYmROSFpnSE1VZz09",
			"password": "4G2R0J"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "10:00",
		"title": "Internal medicine and clinical cases",
		"adress": "29, Akademika Kurchatova str., room #1",
		"moderators": [
			{
				"surname": "Samoilov",
				"name": "Pavlo",
				"middle_name": "D.",
				"tel": "+380506411158"
			},
			{
				"surname": "Shepel",
				"name": "Veronika",
				"middle_name": "V.",
				"tel": "+380685805547"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/4328420013?pwd=b2pnNUprTXNJa25oNFdsTThEK2orZz09",
			"password": "XT9198"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Педіатрія",
		"adress": "ДУ 'Інститут охорони здоров'я дітей та підлітків НАМН України', пр-Ювілейний 52а",
		"moderators": [
			{
				"surname": "Бурко",
				"name": "Варвара",
				"middle_name": "Дмитрівна",
				"tel": "+380501974058"
			},
			{
				"surname": "Тесленко",
				"name": "Анна",
				"middle_name": "Олександрівна",
				"tel": "+380665373948"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/8353177403?pwd=VndYT0hiL0VyK1FDUWdJdmlmL210dz09",
			"password": "2Z2KCv"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Pediatrics",
		"adress": "Only online conference",
		"moderators": [
			{
				"surname": "Avramkina",
				"name": "Darja",
				"middle_name": "K.",
				"tel": "+380685769887"
			},
			{
				"surname": "Shevtsova",
				"name": "Maria",
				"middle_name": "Yu.",
				"tel": "+380662431994"
			}
		],
		"zoom": {
			"link": "https://meet.google.com/hya-jppd-mgi",
			"password": "-"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "10:00",
		"title": "Акушерство та гінекологія",
		"adress": "Міський перинатальний центр, Салтівське шосе, 264",
		"moderators": [
			{
				"surname": "Гвоздь ",
				"name": "Владислав",
				"middle_name": "Віталійович",
				"tel": "+380994500717"
			},
			{
				"surname": "Жадан",
				"name": "Юлія",
				"middle_name": "Геннадіївна",
				"tel": "+380660098738"
			}
		],
		"zoom": {
			"link": "-",
			"password": "-"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "11:00",
		"title": "Психіатрія, наркологія та медична психологія",
		"adress": "ДУ 'Інститут неврології та психіатрії НАМН України', вул. Ак. Павлова, 46",
		"moderators": [
			{
				"surname": "Неляпіна",
				"name": "Марія",
				"middle_name": "Михайлівна",
				"tel": "+380675400970"
			},
			{
				"surname": "Савченко",
				"name": "Дар'я",
				"middle_name": "Володимирівна",
				"tel": "+380660098738"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/3778043685?pwd=c3cyRWFNcVc1NEhnRFFxbytCSTVpUT09",
			"password": "7R4BRy"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Інфекційні хвороби, імунологія та алергологія",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 6й поверх, ауд. 653",
		"moderators": [
			{
				"surname": "Кришталевич",
				"name": "Алiна",
				"middle_name": "Анатоліївна",
				"tel": "+380500832081"
			},
			{
				"surname": "Iванченко",
				"name": "Денис",
				"middle_name": "Сергiйович",
				"tel": "+380939109111"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/5813095022?pwd=bFREZHhDV0diaGJ4S3crVTQvck1ydz09",
			"password": "0rSRdF"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "10:00",
		"title": "Неврологія та нейрохірургія",
		"adress": "ДУ 'Інститут неврології та психіатрії НАМН України', вул. Ак. Павлова, 46",
		"moderators": [
			{
				"surname": "Сазонова",
				"name": "Таїсія",
				"middle_name": "Михайлівна",
				"tel": "+380966764811"
			},
			{
				"surname": "Катагіра ",
				"name": "Михайло",
				"middle_name": "Мозесович",
				"tel": "+380681190319"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/75224766813?pwd=TVY4TjZQVDVCcnBpZkFvWm9Td25Ndz09",
			"password": "4dr9HN"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "10:00",
		"title": "Нормальна морфологія, фізіологія, біохімія, фармакологія",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 7й поверх, ауд. 720",
		"moderators": [
			{
				"surname": "Шихалєєв",
				"name": "Сергiй",
				"middle_name": "Юрiйович",
				"tel": "+380992464346"
			},
			{
				"surname": "Гайденко",
				"name": "Вероніка",
				"middle_name": "Євгеніївна",
				"tel": "+380982140928"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/4715297484?pwd=TldQcWFBbmF2VXVwT3JkbGRsWG5ldz09",
			"password": "8GKWua"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "10:00",
		"title": "Клінічна патологія",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 5й поверх, ауд. 591",
		"moderators": [
			{
				"surname": "Дмитрюкова",
				"name": "Софiя",
				"middle_name": "Романівна",
				"tel": "+380990975857"
			},
			{
				"surname": "Кручиніна",
				"name": "Олеся",
				"middle_name": "Олегівна",
				"tel": "+380950240686"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/77751482400?pwd=Qlh3QVNydGl4WmlBYU8raTc0b01zQT09",
			"password": "7hYSaA"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Гігієна та соціальна медицина",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 6й поверх, ауд. 643а",
		"moderators": [
			{
				"surname": "Шарапова",
				"name": "Олександра",
				"middle_name": "Володимирівна",
				"tel": "+380954583963"
			},
			{
				"surname": "Шнуркова ",
				"name": "Анна",
				"middle_name": "Сергіївна",
				"tel": "+380662519200"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/2287266181?pwd=Y2ptSmU5UFJnTEhuZ3RkNkZFNzR5UT09",
			"password": "560227"
		},
		"program": "-"
	},
	{
		"date": 2,
		"time": "9:00",
		"title": "Сімейна медицина, профілактична медицина, здоровий спосіб життя",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 6й поверх, ауд. 678",
		"moderators": [
			{
				"surname": "Кононенко",
				"name": "Настя",
				"middle_name": "Сергіївна",
				"tel": "+380994503787"
			},
			{
				"surname": "Кулікова",
				"name": "Наталя",
				"middle_name": "Олексіївна",
				"tel": "+380509171360"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/3518885703?pwd=eW5WK2U4MFI5NzlpWXdGbDFhL1lvZz09",
			"password": "8EpQ4v"
		},
		"program": "-"
	},
	{
		"date": 1,
		"time": "13:00",
		"title": "Медична генетика",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 5й поверх, ауд. 581",
		"moderators":[
			{
				"surname": "Захарова",
				"name": "Анна",
				"middle_name": "Олексіївна",
				"tel": "+380955072522"
			},
			{
				"surname": "Ловчикова",
				"name": "Анастасія",
				"middle_name": "Сергіївна",
				"tel": "+380675649003"
			}
		],
		"zoom": null,
		"program": "https://docs.google.com/document/d/e/2PACX-1vR7T0IbrT9k1QpCF6I49RNkRBMxYE5bbimBAeHEqJZ5a9NuYw7TV8P5xwtv0F7R8X5lW8e-bGd1FQ8b/pub"
	},	
	{
		"date": 1,
		"time": "",
		"title": "Історія медицини",
		"adress": "Харківський національний університет імені В.Н. Каразіна, майдан Свободи 6, 5й поверх, ауд. 591",
		"moderators":[
			{
				"surname": "Дмитрюкова",
				"name": "Софiя",
				"middle_name": "Романівна",
				"tel": "+380990975857"
			},
			{
				"surname": "Кручиніна",
				"name": "Олеся",
				"middle_name": "Олегівна",
				"tel": "+380950240686"
			}
		],
		"zoom": {
			"link": "https://us04web.zoom.us/j/76690791255?pwd=TGJWQTRnU1UwNmp0RVViVk1uME9tQT09",
			"password": "0dawEr"
		},
		"program": "https://docs.google.com/document/d/e/2PACX-1vR7T0IbrT9k1QpCF6I49RNkRBMxYE5bbimBAeHEqJZ5a9NuYw7TV8P5xwtv0F7R8X5lW8e-bGd1FQ8b/pub"
	}
];