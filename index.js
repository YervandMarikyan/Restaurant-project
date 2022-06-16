"use strict";

const app = {
	restaurantDetails: [        
		{address: "Երևան, Թումանյան 14"},
		{telNumber: "015 12-23-45"},
		{mail: "info@template.am"},
		{facebook: "http://facebook.com/"},
		{instagram: "http://instagram.com/"},
		{type: "Ռեստորան"},
		{isDelivery: true},
		{isOpen: true},
        {name: "Ծովից Ծով Հայաստան"},
        {workingHours: {
            openingTime: 9,
            closingTime: 24
        }}        
	],
	restaurantStaff: [
		{security: "Էդգար Գեվորգյան"},
        {security: "Արսեն Ավագյան"},
        {waiter: "Մելքոն Դանիելյան"},
        {waiter: "Ալիսա Պողոսյան"},
        {waiter: "Նելլի Դավթյան"},
        {waiter: "Քրիստինե Արսենյան"},
        {barman: "Տիգրան Ռուբենյան"},
        {barman: "Անի Առուստամյան"},
        {
            cook: "Կարինե Տոնոյան",
            workingDays: ["Երեքշաբթի", "Հինգշաբթի", "Շաբաթ", "Կիրակի"]
        },
        {
            cook: "Արտակ Ադամյան", 
            workingDays: ["Երկուշաբթի", "Չորեքշաբթի", "Ուրբաթ"]
        },
        {administrator: "Լիկա Ավագյանց"},
        {courier: "Սամսոն Խաչատրյան"},
        {hostess: "Ալիսա Սուրենյանց"},
        {customer: "Մանե Սարգսյան"}
	],
	restaurantMenu: [
		{
			type: "Տաք ուտեստներ",
            item1: "Խոզի Խորոված",
            item2: "Հավի Խորոված",
            item3: "Ճտի Տապակա ֆրիով",
            item4: "Ձկան Խորոված",
            item5: "Թփով Տոլմա",
            item6: "Կաղամբով Տոլմա",
            item7: "Քյուֆթա"
		},
		{
            type: "Աղցաններ",
            item1: "Մայրաքաղաքային",
            item2: "Հունական",
            item3: "Ամառյին",
            item4: "Ցեզար",
            item5: "Վինեգրեդ",
            item6: "Խեցգետնով",
            item7: "Բազուկով"
        },
		{
            type: "Ալկոհոլային Խմիչքներ",
            item1: "Օղի",
            item2: "Գինի",
            item3: "Կոնյակ",
            item4: "Վիսկի",
            item5: "Լիկյոր",
            item6: "Տեկիլա",
            item7: "Ռոմ"
        },
		{
            type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
            item1: "Տնական Կոմպոտ",
            item2: "Կոկա-Կոլա",
            item3: "Ֆանտա",
            item4: "Սփրայթ",
            item5: "Սեվըն Ափ",
            item6: "Թան",
            item7: "Լիմոնադ"
        },
		{
            type: "Խմորեղեններ",
            item1: "Միկադո",
            item2: "Սնիկերս",
            item3: "Տղամարդու Իդեալ",
            item4: "Տիրամիսու",
            item5: "Շոկոլադե",
            item6: "Մրգային",
            item7: "Բրաունի"
        }
	],
	callCenter(address, telNumber, isDelivery, isOpen, type){
//  2․ Ստուգում եք, եթե ռեստորանը փակ ա, ապա զանգերի կենտրոնի աշխատողը պետք ա կամ անհասանելի լինի, 
//      կամ ուղղակի ասի որ փակ են, մնացած բաները չպետք ա տպվի, իսկ եթե բաց են պետք ա բոլորը տպվեն
        if(!app.restaurantDetails[7].isOpen) {
            return `
                Ոջղույն հարգելի հաճախորդ, շնորհակալություն մեզ զանգահարելու համար, 
                ${app.restaurantDetails[8].name} ռեստորանը այս պահին փակ է։ 
                Սիրով կպատասխանենք Ձեր հարցերին առավոտյան ժամը ${app.restaurantDetails[9].workingHours.openingTime}-ից սկսած
            `;
        } else {
            return `            
			Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
			${
				address = app.restaurantDetails[0].address !== undefined ? 
				"Մեր հասցեն է` " + app.restaurantDetails[0].address: 
				"Կներեք, մենք հասցե չունենք"
			}
			${
				telNumber = app.restaurantDetails[1].telNumber !== undefined ? 
				"Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber : 
				"Կներեք, մենք չունենք հեռախոսահամար"
			}
			${
				isDelivery = app.restaurantDetails[6].isDelivery === true ? 
				"Այո, կարող ենք իրականացնել Ձեր պատվերը" :
				"Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
			}
			${
				isOpen = app.restaurantDetails[7].isOpen === true ? 
				"Այո, ներկա պահին բաց ենք" :
				"Ոչ, կներեք մենք փակ ենք"
			}`;
        }
		
	},
	isOpened(start, end) {
		start >= end ? 
		app.restaurantDetails[7].isOpen = false : 
		app.restaurantDetails[7].isOpen = true;
	},
    makeAnOrder(client, order) {
        return `Հարգելի ${client} ահա և Ձեր պատվերը՝ ${order}`;
    },
    currentDay: "Երեքշաբթի"
};

const clients = [
    {name: "Արմեն Հովհաննիսյան"},
    {name: "Նարեկ Գալստյան"}
];

app.isOpened(9, 24);

const client = app.callCenter();

console.log(client);

//  3․ ստեղծում եք հաճախորդ, ով պատվեր կանի մենակ էն դեպքում եթե էդ օրվա խոհարարը Արտակ Ադամյանն ա
(app.currentDay === app.restaurantStaff[9].workingDays[0] || app.currentDay === app.restaurantStaff[9].workingDays[1] || 
app.currentDay === app.restaurantStaff[9].workingDays[2]) 
    ? console.log(app.makeAnOrder(clients[0].name, [app.restaurantMenu[0].item4, app.restaurantMenu[2].item2])) 
    : console.log(`Կգամ մի ուրիշ օր, երբ խոհարարը լինի ${app.restaurantStaff[9].cook}ը`);

//  4․ մեկ այլ հաճախորդ էլ պետք ա գարեջուր պատվիրի, ու մատուցողներից մեկը պետք ա ներկայանա, ու ասի, 
//      որ գարեջուր չունենք, ու տպի էն ալկոհոլային խմիչքները, որոնք ունեն 

const isAvailable = (app.restaurantMenu[2].item1 === "Գարեջուր" || 
app.restaurantMenu[2].item2 === "Գարեջուր" || 
app.restaurantMenu[2].item3 === "Գարեջուր" || 
app.restaurantMenu[2].item4 === "Գարեջուր" || 
app.restaurantMenu[2].item5 === "Գարեջուր" || 
app.restaurantMenu[2].item6 === "Գարեջուր" || 
app.restaurantMenu[2].item7 === "Գարեջուր");

isAvailable ? console.log(app.makeAnOrder(clients[1].name, "Գարեջուր")) 
    : console.log(`Հարգելի ${clients[1].name} իմ անունը ${app.restaurantStaff[3].waiter} է, 
մեր մենյուի մեջ բացակայում է Գարեջուրը, կառաջարկեմ ծանոթանալ մեր խմիչքների տեսականու հետ՝ 
    ${app.restaurantMenu[2].item1}
    ${app.restaurantMenu[2].item2}
    ${app.restaurantMenu[2].item3}
    ${app.restaurantMenu[2].item4}
    ${app.restaurantMenu[2].item5}
    ${app.restaurantMenu[2].item6}
    ${app.restaurantMenu[2].item7}
    `);



