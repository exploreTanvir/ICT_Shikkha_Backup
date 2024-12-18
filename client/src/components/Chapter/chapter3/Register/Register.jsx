import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import flipflop from "../../../../assets/43.jpg.webp"
import { Chpt3SubDetail } from '../../../chapterSub/Chpt3Sub/Chpt3SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Register = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>তৃতীয় অধ্যায়</h1>
            <h3>সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস</h3>
            <h3>রেজিস্টার(Register)</h3>
        </div>
        <div className='py-5'>
        <h4><b>SR ল্যাচ : </b></h4>
        <p>আমাদের প্রায়ই সার্কিটে কোন একটি মানকে সংরক্ষণ করে রাখার প্রয়োজন পড়ে যাকে আমরা মেমরি বলে থাকি। কম্পিউটার তার রেজিস্টারের মধ্যে সকল কিছু বাইনারীতে সংরক্ষণ করে। আবার প্রতিটি বিট সংরক্ষণ করে রেজিস্টারে থাকা এক একটি ফ্লিপ-ফ্লপ (Flip-Flop), যা মূলত রেজিস্টারের মৌলিক উপাদান। অর্থাৎ রেজিস্টার তৈরী হয় কতগুলো ফ্লিপ-ফ্লপের সমন্বয়ে। আর এই ফ্লিপ-ফ্লপ বুঝতে হলে আমাদের জানা প্রয়োজন ল্যাচ (Latch) সম্পর্কে। </p>
        <p>ইংরেজী শব্দ ‘Latch’ এর অর্থ দরজার ছিটকিনি। অপরদিকে S ও R যথাক্রমে Set এবং Reset -কে নির্দেশ করে।</p>
        <p>দরজার ছিটকিনি বন্ধ রেখে আমরা যেমন কোন জিনিসকে সংরক্ষণ করি তেমনি ডিজিটাল সার্কিটে কোন মান সংরক্ষণ করতে বিশেষভাবে সার্কিট ডিজাইন করা হয়। এক্ষেত্রে দুইটি ন্যান্ড (NAND) অথবা নর (NOR) গেট এমনভাবে সাজানো হয় যেন একটি গেটের আউটপুট অন্য গেটটির একটি ইনপুটের সাথে সংযুক্ত থাকে। আউটপুট (Q) -এর মান ১ করাকে বলে Set আর আউটপুট (Q) -এর মান ০ করাকে Reset বলে।</p>

       <h4>বৈশিষ্টঃ</h4>
       <ul>
        <li>মৌলিক স্টোরেজ উপাদান। </li>
        <li>দুটি ইনপুট আছে R (RESET) এবং S (SET) </li>
        <li>দুটি আউটপুট Q এবং Q আছে।</li>
        <li>আউটপুটের মান বর্তমান ইনপুট ও পূর্ববর্তী আউটপুটের উপর নির্ভর করে। </li>
        
        <li>আউটপুট Q ও Q এর মান সমান হবেনা কারণ উভয়ই একে অপরের পরিপূরক। </li>
        <li>NOR গেটের ল্যাচকে অ্যাক্টিভ হাই ইনপুট ল্যাচও বলা হয়। </li>
        <li>NAND গেটের ল্যাচকে অ্যাক্টিভ লো ইনপুট ল্যাচও বলা হয়। </li>
        <li>আউটপুট Q=1 হলে তাকে শর্ত সেট (SET) করা বলে।</li>
        <li>আউটপুট  Q=0 হলে তাকে শর্ত রিসেট (Reset) করা বলে।</li>
       </ul>
       <p>গঠনঃ দুইটি NAND গেট নিম্নোক্তভাবে সাজিয়ে ল্যাচ তৈরী করা হয়।।</p>

       
        <i className='text-primary'>[ বিঃ দ্রঃ NAND ল্যাচের আউটপুট সিমুলেট করতে S ও R বাটনে ক্লিক করো ]</i>

         <p>আমরা জানি, ন্যান্ড (NAND) গেটের একটি ইনপুট ০ হলেই আউটপুট নিশ্চিতভাবে ১ আসবে। তাহলে বিভিন্ন ইনপুটের জন্য ‘SR ল্যাচের’ আউটপুটের অবস্থা কেমন হয় তা বিশ্লেষণ করি।</p>
         <p><b>Case 1</b> (S=0 ; R=0) : NAND গেটের ইনপুট ০ হওয়ায় নিশ্চিতভাবে Q=1 ও Q=1 হওয়ার কথা। কিন্তু ল্যাচের শর্ত অনুযায়ী একটির আউটপুট হতে হবে অপরটির পূরক (Complement) অর্থাৎ ল্যাচের এমন ইনপুট (S=0 ; R=0) গ্রহণযোগ্য নয়। </p>
         <p><b>Case 2 </b>(S=0 ; R=1) : ইনপুট S এর মান ০ হওয়ায় আউটপুট Q এর মান নিশ্চিতভাবে ১ হবে। আউটপুট (Q) -এর মান ১ করাকে বলে ‘Set’ করা। আবার যেহেতু এই Q এর মান অপর ন্যান্ড গেটের একটি ইনপুট তাই উক্ত গেটের ইনপুট দুইটি ১ ও ১ হওয়ার কারনে আউটপুট Q এর মান ০ হবে।</p>
         <p><b>Case 3</b> (S=1 ; R=1) : ইনপুট S ও R উভয়ের মান 1 হওয়ায় Q কিংবা R কোনটির মান নিশ্চিতভাবে বলা সম্ভব নয়। তাই উভয় ক্ষেত্রেই আমাদের পূর্ববর্তী আউটপুট কি ছিল তা বিবেচনায় আনতে হবে। তাহলে প্রথম NAND এর ইনপুট ১ ও ০ হওয়ায় আউটপুট Q এর মান ১ হবে। অপরদিকে আরেকটি NAND এর ইনপুট ১ ও ১ হওয়ায় আউটপুট Q এর মান ০ হবে। অর্থাৎ ল্যাচের ইনপুট S=1 ও R=1 এর জন্য Q ও Q এর মানের কোন পরিবর্তন হয়নি। ইনপুটের মান পরিবর্নের পরেও আউটপুটের মান পরিবর্তন না হওয়ায় একে মেমোরি স্টেট বা অবস্থা বলে। </p>
         <p><b>Case 4</b> (S=1 ; R=0) : ইনপুট R এর মান ০ হওয়ায় আউটপুট Q এর মান নিশ্চিতভাবে ১ হবে। আবার যেহেতু এই Q এর মান অপর ন্যান্ড গেটের একটি ইনপুট তাই উক্ত গেটের ইনপুট দুইটি ১ ও ১ হওয়ার কারনে আউটপুট Q এর মান ০ হবে। আউটপুট (Q) -এর মান ০ করাকে বলে ‘Reset‘ করা। </p>
         <p><b>Case 5</b> (S=1 ; R=1) : Case 3 থেকে আমরা জেনেছি  ইনপুট S ও R উভয়ের মান 1 করলে আউটপুট Q ও Q -এর মানের কোন পরিবর্তন হয়না অর্থাৎ মেমোরি স্টেট বা অবস্থাপ্রাপ্ত হয়। এক্ষেত্রে আউটপুট Q ও Q -এর মান যথাক্রমে ০ ও ১ থেকে যায় যা Case 4 এর অনুরূপ।</p><br />
         <p>যে রেজিস্টারের মাধ্যমে বাইনারি বিটকে ডানদিকে বা বামদিকে কিংবা উভয় দিকে সরানো যায় তাকে শিফট রেজিস্টার বলে। এ রেজিস্টারে ফ্লিফ-ফ্লপগুলো চেইন আকারে একটির আউটপুট অন্যটির ইনপুটের সাথে সংযুক্ত থাকে। একটি কমন পালসের মাধ্যমে সকল ফ্লিপ-ফ্লপ ইনপুট গ্রহণ করে।</p>
         <h4 className='mt-5'><b>শিফট রাইট (Shift Right) রেজিস্টারঃ  </b></h4>
         <p>যে রেজিস্টারের মাধ্যমে বাইনারি বিটকে ডানদিকে দিকে সরানো যায় তাকে শিফট রাইট রেজিস্টার বলে। ফ্লিফ-ফ্লপগুলো চেইন আকারে একটির আউটপুট (Q) অন্যটির ইনপুট (D) -এর সাথে সংযুক্ত থাকে। সকল ফ্লিপ-ফ্লপ একটি কমন ক্লক (Clk) পালসের সাথে সংযুক্ত থাকে। প্রতিটি পালসে সিরিয়াল ইনপুটের একটি করে বাইনারী বিট ডান দিকের ফ্লিপফ্লপে স্থানান্তরিত হতে থাকে।</p>
         <p>শুধুমাত্র D flip-flop ব্যবহার করে তৈরি রাইট শিফট রেজিস্টারের ব্লক ডায়াগ্রাম নিম্নরূপঃ</p>
         <img src={flipflop} alt="" />
         <h4 className='mt-5'><b>3 বিটের শিফট রেজিস্টার সিমুলেশনঃ </b></h4>
         <i className='text-primary'>[সিমুলেট করতে clock pulse বাটনে ক্লিক করো।] </i>
         <p>D ফ্লিপ-ফ্লপে যে ইনপুট দেওয়া হয় তাই আউটপুট হিসেবে পাওয়া যায়। এখানে ফ্লিপ-ফ্লপগুলো ‘Positive Edge Triggering’ অর্থাৎ ক্লকের মান কেবলমাত্র ০ থেকে ১ এ উত্তীর্ণ হলেই সচল হয়। প্রাথমিক অবস্থায় প্রতিটি ফ্লিপ-ফ্লপের আউটপুট এর মান ০ থাকে। একবার ক্লক পালস দিলে প্রতিটি বিট ফ্লিপ-ফ্লপের ডান দিকে সরতে থাকে এবং সর্বশেষ বিটটি হারিয়ে যায়।</p>
         <p>মনে করি, আউটপুট Q0 = 0 , Q1 = 0 , Q2 = 0 এবং আমরা সিরিয়াল ইনপুট 01101 দিলাম।</p>
         <p><b>১ম ক্লক পালসেঃ</b> ইনপুটের (01101) সর্ব ডানের বিটটি (LSB) প্রথম ফ্লিপ-ফ্লপের ইনপুট (D0) হবে ফলে আউটপুট (Q0) এর মান হবে 0 থেকে 1 হবে,  এবং পূর্বের বিট স্থানান্তরিত হয়ে Q1 ও Q2 এর মান যথাক্রমে 0 ও 0 হবে।</p>
         <p><b>২য় ক্লক পালসেঃ</b> পূর্বের বিট স্থানান্তরিত হয়ে আউটপুট Q0 , Q1 ,ও Q2 এর মান যথাক্রমে 0, 1 ও 0 হবে।</p>
         <p><b>৩য় ক্লক পালসেঃ</b> পূর্বের বিট স্থানান্তরিত হয়ে আউটপুট Q0 , Q1 ,ও Q2 এর মান যথাক্রমে 1, 0 ও 1 হবে।</p>
         <p>একইভাবে প্রতিটি পালসে ফ্লিপ-ফ্লপের আউটপুট এক বিট করে ডানে সরতে থাকবে এবং সর্বশেষ বিটটি হারিয়ে যাবে</p>
         <h4>সংক্ষেপেঃ </h4>
         <ul>
          <li>প্রতিটি ফ্লিপ-ফ্লপের ক্লক একই লাইনে সংযুক্ত থাকে।</li>
          <li>প্রাথমিক অবস্থায় সকল আউটপুট (Q) এর মান ০ থাকবে।</li>
          <li>ক্লকের পজেটিভ ট্রানজিশনের জন্য কাজ করে।</li>
          <li>সার্কিট সচল হলে ইনপুটের মান ডান দিকের ফ্লিপ-ফ্লপে স্থানান্তর হতে থাকে। </li>
          <li>প্রতি ক্লক পালসে শেষের ফ্লিপ-ফ্লপে থাকা বিটটি হারিয়ে যায়। </li>
         </ul>
        
       </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                Chpt3SubDetail.map((item,index)=>{
        return(
          <Link key={index} to={item.name} className="mb-4">
             <h4 className='chapterOne'>{item.title}</h4>
          </Link>
        )
      })
    }
                </div>
                </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
        </div>
  )
}

export default Register