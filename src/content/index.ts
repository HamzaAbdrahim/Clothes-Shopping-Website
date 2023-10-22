import assest from "../assets/imges";
import {typecatgory} from "../components/types"
import {spechillist} from "../components/Dashbord/Types"

interface bar {
    path: string;
    titel:string,
    icon:string
}
interface backgroundimges {
    img:string
}
interface colors {
    color:string | undefined
}
interface sizes {
    size:string
}
export const bar:bar[] = [
    {
        titel:"دليل الإستعمال",
        icon:assest.directory,
    path:"/"
    },
    {
        titel:"تواصل معنا",
        icon:assest.communication,
        path:"/"
    },
    {
        titel:"التوصيل",
        icon:assest.delivery,
        path:"/"
    },
    {
        titel:"سياسة الإستبدال و الإسترجاع",
        icon:assest.return_policy,
        path:"return-policy"
    },
    {
        titel:"الأسئلة الشائعة",
        icon:assest.question,
        path:"/"
    },
]

export const backgrounds:backgroundimges[] = [
    {
        img:assest.img_one
    },
    {
        img:assest.img_two
    },
    {
        img:assest.img_three
    },
    {
        img:assest.img_thore
    }

]

export const colors:colors[] = [
    {
        color:'#00C12B'
    },
    {
        color:'#F50606'
    },
    {
        color:'#F5DD06'
    },
    {
        color:'#F57906'
    },
    {
        color:'#06CAF5'
    },
    {
        color:'#7D06F5'
    },
    {
        color:'#F506A4'
    },

    {
        color:'#FFF'
    },
    {
        color:'#000'
    },
    {
        color:'#7D06F5'
    },

]

export const sizes:sizes[] = [
    {
        size:'XX-Small'
    },
    {
        size:'X-Small'
    },
    {
        size:'Small'
    },
    {
        size:'Medium'
    },
        {
        size:'Large'
    },
    {
        size:'X-Large'
    },
    {
        size:'XX-Large'
    },
    {
        size:'3X-Large'
    },
    {
        size:'4X-Large'
    },

]

export const wilayas  = [
    {
        value: "أدرار",
        label: "Adrar - أدرار"
    },
    {
        value: "الشلف",
        label: "Chlef - الشلف"
    },
    {
        value: "الأغواط",
        label: "Laghouat - الأغواط"
    },
    {
        value: "أم البواقي",
        label: "Oum El Bouaghi - أم البواقي"
    },
    {
        value: "باتنة",
        label: "Batna - باتنة"
    },
    {
        value: "بجاية",
        label: "Béjaïa - بجاية"
    },
    {
        value: "بسكرة",
        label: "Biskra - بسكرة"
    },
    {
        value: "بشار",
        label: "Bechar - بشار"
    },
    {
        value: "البليدة",
        label: "Blida - البليدة"
    },
    {
        value: "البويرة",
        label: "Bouira - البويرة"
    },
    {
        value: "تمنراست",
        label: "Tamanrasset - تمنراست"
    },
    {
        value: "تبسة",
        label: "Tébessa - تبسة"
    },
    {
        value: "تلمسان",
        label: "Tlemcene - تلمسان"
    },
    {
        value: "تيارت",
        label: "Tiaret - تيارت"
    },
    {
        value: "تيزي وزو",
        label: "Tizi Ouzou - تيزي وزو"
    },
    {
        value: "الجزائر",
        label: "Alger - الجزائر"
    },
    {
        value: "الجلفة",
        label: "Djelfa - الجلفة"
    },
    {
        value: "جيجل",
        label: "Jijel - جيجل"
    },
    {
        value: "سطيف",
        label: "Sétif - سطيف"
    },
    {
        value: "سعيدة",
        label: "Saïda - سعيدة"
    },
    {
        value: "سكيكدة",
        label: "Skikda - سكيكدة"
    },
    {
        value: "سيدي بلعباس",
        label: "Sidi Bel Abbès - سيدي بلعباس"
    },
    {
        value: "عنابة",
        label: "Annaba - عنابة"
    },
    {
        value: "قالمة",
        label: "Guelma - قالمة"
    },
    {
        value: "قسنطينة",
        label: "Constantine - قسنطينة"
    },
    {
        value: "المدية",
        label: "Médéa - المدية"
    },
    {
        value: "مستغانم",
        label: "Mostaganem - مستغانم"
    },
    {
        value: "مسيلة",
        label: "MSila - مسيلة"
    },
    {
        value: "معسكر",
        label: "Mascara - معسكر"
    },
    {
        value: "ورقلة",
        label: "Ouargla - ورقلة"
    },
    {
        value: "وهران",
        label: "Oran - وهران"
    },
    {
        value: "البيض",
        label: "El Bayadh - البيض"
    },
    {
        value: "إليزي",
        label: "Illizi - إليزي"
    },
    {
        value: "برج بوعريريج",
        label: "Bordj Bou Arreridj - برج بوعريريج"
    },
    {
        value: "بومرداس",
        label: "Boumerdès - بومرداس"
    },
    {
        value: "الطارف",
        label: "El Tarf - الطارف"
    },
    {
        value: "تندوف",
        label: "Tindouf - تندوف"
    },
    {
        value: "تيسمسيلت",
        label: "Tissemsilt - تيسمسيلت"
    },
    {
        value: "الوادي",
        label: "Eloued - الوادي"
    },
    {
        value: "خنشلة",
        label: "Khenchela - خنشلة"
    },
    {
        value: "سوق أهراس",
        label: "Souk Ahras - سوق أهراس"
    },
    {
        value:"تيبازة" ,
        label: "Tipaza - تيبازة"
    },
    {
        value:"ميلة" ,
        label: "Mila - ميلة"
    },
    {
        value:" عين الدفلى" ,
        label: "Aïn Defla - عين الدفلى"
    },
    {
        value: "النعامة",
        label: "Naâma - النعامة"
    },
    {
        value:" عين تموشنت" ,
        label:" Aïn Témouchent - عين تموشنت"
    },
    {
        value:"غرداية" ,
        label:" Ghardaïa - غرداية"
    },
    {
        value: "غليزان",
        label: "Relizane - غليزان"
    },
    {
        value:"تيميمون" ,
        label: "Timimoun - تيميمون"
    },
    {
        value:" برج باجي مختار" ,
        label: "Bordj Baji Mokhtar - برج باجي مختار"
    },
    {
        value:" أولاد جلال" ,
        label: "Ouled Djellal - أولاد جلال"
    },
    {
        value:" بني عباس ",
        label: "Béni Abbès -  بني عباس"
    },
    {
        value:" عين صالح" ,
        label:  "Aïn Salah - عين صالح"
    },
    {
        value:" عين قزام" ,
        label:" In Guezzam - عين قزام"
    },
    {
        value:"تقرت" ,
        label:" Touggourt - تقرت"
    },
    {
        value:"جانت" ,
        label:" Djanet - جانت "
    },

]

export const catograys:typecatgory[] = [
    {
        img:assest.hijab,
        titel:"حيجابات",
        width:'30%'
    },
    {
        img:assest.hijab_two,
        titel:"خيمارات",
        width:'68%'
    },

]
    
export const dashbordlist:spechillist[] = [
{
    icon:assest.dashbord,
    titel:"لوحة التحكم",
    path:"/dashbord",
},
{
    icon:assest.user,
    titel:"المستخدمين",
    path:"users",
},
{
    icon:assest.order,
    titel:"الطلبيات",
    path:"orders",
},
{
    icon:assest.add_icon,
    titel:"إضافة المنتجات",
    path:"addproduct",
}
]


export const stateorder = [
    {
        img:assest.shping , 
        bgcolor:"linear-gradient(99deg, #6BAAFC 0%, #305FEC 100%)",
        number:67,
        titel:"الطلبات  تم شحنها"
    },
    {
        img:assest.order_icon , 
        bgcolor:"linear-gradient(99deg, #EF5E7A 0%, #D35385 100%)",
        number:9,
        titel:"الطلبات المعلقة"
    },
    {
        img:assest.neworder , 
        bgcolor:"linear-gradient(99deg, #D623FE 0%, #A530F2 100%)",
        number:35,
        titel:"الطلبات الجديدة"
    },
]








































