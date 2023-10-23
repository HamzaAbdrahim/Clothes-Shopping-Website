import assest from '../../../assets/imges'
import "../../../scss/pages/home/_Return_policy.scss"

const Return_policy = () => {
  return (
  <>
    <div className='Return_policy'>
    <h1>سياسة إستبدال وإرجاع السلع</h1>
    <img src={assest.retur_polic} alt="retur_polic" className='police' />
    <div className='content'>
    <h1 className='titel'>إستبدال السلع</h1>
    <p className='discrption'>في حالة أردت إستبدال منتج يرجى التواصل مع مصلحة خدمة الزبائن على أرقام الهاتف التالي: 0770449811 | 0770448261 | 0770448996 |  0770449697 أو من خلال أرقام الهاتف في فاتورة المنتج الذي وصلك خلال أوقات العمل الرسمية من الساعة التاسعة صباحا إلى الساعة الخامسة مساءا كل أيام الأسبوع ماعدى يوم الجمعة، وسنكون سعداء بخدمتكم.</p>
    </div>
    </div>
  </>
  )
}

export default Return_policy