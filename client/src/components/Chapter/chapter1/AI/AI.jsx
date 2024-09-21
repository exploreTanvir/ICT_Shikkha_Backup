import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { Chpt1SubDetail } from '../../../chapterSub/Chpt1Sub/Chpt1SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../GlobalVillage/GlobalVillage.css"

const AI = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>প্রথম অধ্যায়</h1>
            <h3>তথ্য ও যোগাযোগ প্রযুক্তি : বিশ্ব ও বাংলাদেশ প্রেক্ষিত</h3>
            <h2>আর্টিফিসিয়াল ইন্টেলিজেন্স (Artificial Intelligence)</h2>
        </div>
        <p className='mt-4'>Artificial Intelligence সংক্ষেপে AI নামটি আজকাল আমরা প্রায়ই শুনে থাকি। আর্টিফিসিয়াল (Artificial) এবং ইনটেলিজেন্স (Intelligence) ইংরেজি শব্দদুটির বাংলা অর্থ হলো যথাক্রমে কৃত্রিম এবং বুদ্ধিমত্তা। অর্থাৎ আর্টিফিসিয়াল ইনটেলিজেন্স এর অর্থ কৃত্রিম বুদ্ধিমত্তা।</p>
        <p>কম্পিউটার নিজ থেকে কোন সিদ্ধান্ত গ্রহণ করতে পারেনা, কারণ আমাদের মত কম্পিউটারের নিজের কোন বুদ্ধিমত্তা নেই। চিন্তা-ভাবনা করে মানুষের সিদ্ধান্ত নেওয়ার এই পদ্ধতি যদি কৃত্তিম উপায়ে কোন যন্ত্র বা কম্পিউটারে বাস্তবায়ন করা যায়, তবে সেও একইভাবে চিন্তা-ভাবনা করে সিদ্ধান্ত নিতে পারে।</p>
        
        <h4><b>সংজ্ঞা : </b></h4>
        <p>মানুষের চিন্তা ভাবনা অথবা বুদ্ধিমত্তার পদ্ধতিটাকে কৃত্রিম উপায়ে কম্পিউটারের মাধ্যমে বাস্তবায়ন করাকে বলে আর্টিফিসিয়াল ইনটেলিজেন্স বা কৃত্রিম বুদ্ধিমত্তা।</p>
      
        <h4><b>কৃত্রিম বুদ্ধিমত্তা প্রয়োগক্ষেত্র : </b></h4>

        <ul>
            <li>এক্সপার্ট সিস্টেম</li>
            <li>মেশিন লার্নিং</li>
            <li>রোবোটিক্স</li>
            <li>নিউরাল নেটওয়ার্কস</li>
            <li>ন্যাচারাল ল্যাংগুয়েজ প্রসেসিং (NLP)</li>
            <li>ইমেজ প্রসেসিং </li>               
            </ul>
            <p>ইত্যাদি ক্ষেতে কৃত্রিম বুদ্ধিমত্তা প্রয়োগ করা হয়। কৃত্রিম বুদ্ধিমত্তা বাস্তবায়নে LISP, CLISP, PROLOG, C/C++, Java ইত্যাদি ভাষা ব্যবহার করা হয়।</p>

        <h4><b>প্রত্যাহিক জীবনে কৃত্রিম বুদ্ধিমত্তার ব্যবহার বা সুবিধা : </b></h4>


            <p> বর্তমান বিশ্বে এমন কোন প্রযুক্তিনির্ভর ক্ষেত্র খুঁজে পাওয়া কঠিন যেখানে কৃত্রিম বুদ্ধিমত্তার ব্যবহার নেই। তাদের মধ্যে উল্লেখযোগ্য কিছু ব্যবহার নিম্নরূপঃ</p>
            <ul>
                <li>আবহাওয়া পূর্বাভাস ও গবেষণায়।</li>
                <li>চালকবিহীন স্বয়ংক্রিয় পরিবহন তৈরিতে।</li>
                <li>আধুনিক চিকিৎসা ও অপারেশনে।</li>
                <li>মহাকাশ অভিযান ও গবেষণায়।</li>
                <li>কর্মক্ষম বুদ্ধিমান রোবট তৈরিতে।</li>
            </ul>              
        <h4><b>কৃত্রিম বুদ্ধিমত্তা ব্যবহারে অসুবিধাঃ : </b></h4>
            <ul>
                <li><b>বেকারত্ব বৃদ্ধি : </b> মানুষের কাজ কৃত্রিম বুদ্ধিমত্তা করে দেওয়ায় বেকারত্ব বৃদ্ধি পাবে।</li>
                <li><b>সৃজনশীলতা হ্রাস : </b> মানুষের সৃজনশীলতা হ্রাস পাবে। বর্তমানে AI নির্ভর কিছু প্রোগাম যেমন midjourney, leonardo.ai ইত্যাদি নির্দেশ অনুযায়ী চিত্রশিল্প তৈরি করে দিচ্ছে। </li>
                <li><b>ধ্বংসাত্মক পরিণতি : </b> যুদ্ধক্ষেত্রে AI এর ব্যবহার হতে পারে ভয়াবহ তাছাড়া স্বঅনুভূতি বিশিষ্ট AI হতে পারে মানব সভ্যতার জন্য হুমকি।</li>
            </ul>              
             </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
      Chpt1SubDetail.map((item,index)=>{
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

export default AI