import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bkash from '../../../assets/bkash.png';
import { AllCourseMenu } from "../../AllCourse/AllCourseMenu";
import { courseDeta } from '../CourseDetail';
import './CourseDetails.css';



const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('details');
  const notify = () => toast("সফলভাবে প্রেরন হয়েছে! আমাদের সাপোর্ট টিম কিছু সময়ের মধ্যেই আপনার রিকুয়েস্টটি ভেরিফাই করবে। অনুগ্রহ করে অপেক্ষা করুণ ।");


  const handleCopyClick = () => {
    toast("👌সফলভাবে কপি হয়েছে ! ")
    const textToCopy = document.getElementById("copyText").innerText; 
    navigator.clipboard.writeText(textToCopy)
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    accountType: "বিকাশ",
    accountNumber: "01721554216",
  });
  
  const { courseId } = useParams();
  const course = AllCourseMenu[courseId];

  const updatePaymentInfo = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSelectedPaymentMethod({
      accountType: selectedOption.text,
      accountNumber: selectedOption.getAttribute("data-account"),
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="content">
            <h4>কোর্স সম্পর্কে বিস্তারিত</h4>
            <p>"এই কোর্সটি সকল শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে, এবং যারা Microsoft Excel-এ দক্ষতা অর্জন করতে চায়, তাদের জন্যও উপযোগী। এখানে শিক্ষার্থীরা এক্সেলের মৌলিক থেকে উন্নত কৌশল শিখবে, যা ডেটা অ্যানালাইসিস, রিপোর্টিং এবং প্রোফেশনাল কাজের জন্য প্রয়োজনীয়।

আমাদের লক্ষ্য শিক্ষার্থীদের এক্সেল ব্যবহার করে বাস্তব জীবনের কাজগুলোতে দক্ষ করে তোলা, যাতে তারা ভবিষ্যতে সফল হতে পারে।"</p> 
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header rounded" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    কোর্সটি যাদের জন্য:
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <ul type="square">
                      <li>যারা পড়াশোনার পাশাপাশি নিজের স্কিল ডেভেলপ করতে চান।</li>
                      <li>যারা পড়াশোনার কাজে ডেটা অ্যানালাইসিস বা রিপোর্ট তৈরি করতে চায়।</li>
                      <li>যারা অফিস বা প্রফেশনাল কাজে এক্সেল দক্ষতা দেখাতে চায়।</li>
                      <li>একাডেমিক প্রজেক্টে কাজ করা শিক্ষার্থী।</li>
                      <li>যারা ডেটা এন্ট্রি, রিপোর্টিং, বা অ্যানালাইসিসে কাজ করেন।</li>
                      <li>যারা প্রোডাক্ট লিস্টিং এবং ডেটা ম্যানেজমেন্টে দক্ষতা অর্জন করতে চায়।</li>
                    </ul>
                  </div>
                </div>
              </div>
              {courseDeta.map((item, index) => (
                <div key={index} className="accordion-item">
                  <h1 className="accordion-header rounded" id={item.flushID}>
                    <button
                      className="accordion-button fs-5 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={item.flushCollapsTarget}
                      aria-expanded="false"
                      aria-controls={item.flushCollaps}
                    >
                      {item.title}
                    </button>
                  </h1>
                  <div
                    id={item.flushCollaps}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.flushID}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul type="square">
                        <p>{item.item3}</p>
                        <li>{item.item}</li>
                        <p>{item.item2}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="paymentContainer modal-dialog modal-dialog-centered modal-dialog-scrollable"
                >
                  <div className="modal-content">
                    <div className="modal-header pt-">
                      <button
                        type="button"
                        className="btn-close p-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="paymentMethod"
                                className="form-label fw-bold"
                              >
                                পেমেন্ট মেথড বেছে নিন
                              </label>
                              <select
                                className="form-select"
                                id="paymentMethod"
                                onChange={updatePaymentInfo}
                              >
                                <option value="বিকাশ" data-account="01721554216">
                                 <img src={bkash} alt="" /> বিকাশ
                                </option>
                                <option value="রকেট" data-account="0845421541">
                                  রকেট
                                </option>
                                <option value="নগদ" data-account="09542515421">
                                  নগদ
                                </option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="senderMobile"
                                className="form-label fw-bold"
                              >
                                অর্থের পরিমান
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="senderMobile"
                                placeholder={course.price}
                                value={course.price}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="senderMobile"
                                className="form-label fw-bold"
                              >
                                প্রেরকের মোবাইল নাম্বার
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="senderMobile"
                                placeholder=""
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="transactionId"
                                className="form-label fw-bold"
                              >
                                ট্রানজেকশন আইডি (TrxID)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="transactionId"
                                placeholder=""
                              />
                            </div>
                            <button
                              type="button"
                              id="liveToastBtn"
                              className="py-2 w-100 mt-4 btn1"
                              onClick={notify}
                            >
                              প্রেরণ করুন <i className="fa fa-arrow-right ms-2"></i>
                            </button>
                          </form>
                        </div>
                        <div className="col-md-6 px-4 paymentRight">
                          <h4 className="fw-bold Instruction mb-3 mt-sm-3">
                            নির্দেশসমূহ অনুসরণ করুন
                          </h4>
                          <p>
                            <b id="accountType">{selectedPaymentMethod.accountType}</b> একাউন্ট এ
                            আপনার কোর্স ফি পাঠান
                          </p>
                          <ul>
                            <li id="accountNumber">
                              <b>{selectedPaymentMethod.accountType}</b> পারসোনাল:{" "}
                             <button id="copyText" onClick={handleCopyClick} className="bg-white border-0"> <b><i className="fa-regular fa-copy ms-3 me-1"></i>{selectedPaymentMethod.accountNumber}</b></button>
                            
                            </li>
                          </ul>
                          <p>
                            ফি পাঠানোর পরে, আপনার তালিকাভুক্তির অনুরোধ সম্পূর্ণ করার জন্য
                            লেনদেন আইডি (TrxID) এবং প্রেরকের মোবাইল নম্বর ব্যবহার করুন।
                            যখন আমরা আপনার অনুরোধ পাই, আমরা এটি 10-15 মিনিটের মধ্যে
                            সক্রিয় করব, তারপর আপনি কোর্সটি শুরু করতে পারবেন।
                          </p>
                          <p>
                            আরও সাহায্যের জন্য আমাদের হেল্পলাইনে যোগাযোগ করুন : <br />
                            <b
                              ><i className="fa-solid fa-headset"></i> হেল্পলাইন :
                              ০১৪১৮৭৮৪৪৫</b>
                          </p>
                          <p>
                            <b><i className="fa-solid fa-phone-volume"></i> মোবাইল:</b>
                            <i>০১৮৫৫৮৮২২৫</i> <br />
                            <b><i className="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপ:</b>
                            <i>০১৮৮২৫৫৫২২</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className='mt-5'>কী কী শিখবেন এ কোর্স থেকে?</h4>

            <ul className='CourseDetailUl list-unstyled d-flex gap-5 mt-3'>
                <div><li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>Excel-এর বেসিক ধারণা।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ডেটা এন্ট্রি এবং ফর্ম্যাটিং।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ফর্মুলা এবং ফাংশন।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ডেটা অ্যানালাইসিস টুলস।</li></div>
                <div>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ডেটা ভ্যালিডেশন এবং অটোমেশন।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ডেটা ভ্যালিডেশন এবং অটোমেশন।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ডেটা সিকিউরিটি এবং শেয়ারিং।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>প্রজেক্ট ভিত্তিক শিখন।</li>
                </div>
            </ul>
            <h4 className='mt-5'>কোর্সটি করার জন্য যা যা প্রয়োজন</h4>

            <ul className='CourseDetailUl list-unstyled mt-3'>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>সফটওয়্যার এবং হার্ডওয়্যার সম্পর্কে বেসিক ধারণা</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>পূর্বজ্ঞান (যদি থাকে)।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>কোর্সের জন্য একটি নোটবুক বা ডায়েরি</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>শেখার আগ্রহ।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ধৈর্য এবং নিয়মিত প্র্যাকটিস করার ইচ্ছা।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>ইন্টারনেট কানেকশন (যদি লাইভ ক্লাস বা অনলাইন কনটেন্ট অ্যাক্সেস করা লাগে)।</li>
                <li><i class="fa-solid fa-circle-check me-2 courseDetailIcon"></i>প্র্যাকটিস ফাইল (তুমি কোর্সের সময় সরবরাহ করতে পারো)।</li>
               
            </ul>
          </div>
        );
      case 'curriculum':
        return (
          <div className="content">
            <h2>কারিকুলাম</h2>
            <p>Here is the curriculum content...</p>
          </div>
        );
      case 'instructor':
        return (
          <div className="content">
            <div className="my-4 mb-5 d-flex align-items-center courseTop" style={{gap: "27px"}}>

<div>               
          <img className="Instructors rounded-circle" src={course.instructor} alt="" />
        </div>

<div className="gap-2">
          <h5>{course.instructorName}</h5>
          <h6>বি.এস.সি. ইন কম্পিউটার ইঞ্জিনিয়ারিং</h6>
        </div>
        


</div>
<p className='text-black-50'>"আমি তৌহিদ হোসেন, একজন ইঞ্জিনিয়ার ও প্রশিক্ষক। প্রযুক্তি শিক্ষার প্রতি আমার নিবেদন আমাকে সব সময় নতুন দক্ষতা শেখার এবং অন্যদের শেখানোর অনুপ্রেরণা জোগায়। এবার আমি Microsoft Excel-এর উপর একটি বিশেষ কোর্স নিয়ে এসেছি, যা এক্সেলের বেসিক থেকে শুরু করে অ্যাডভান্সড লেভেল পর্যন্ত দক্ষতা অর্জনে সহায়তা করবে।

আমার লক্ষ্য হলো শিক্ষার্থীদের এমনভাবে প্রশিক্ষণ দেওয়া, যাতে তারা এক্সেলের মাধ্যমে ডেটা ব্যবস্থাপনা, অ্যানালাইসিস, এবং প্রোফেশনাল রিপোর্টিং-এ দক্ষ হয়ে উঠতে পারে। এই কোর্সটি এক্সেলের ব্যবহারিক দিকগুলো সহজ ভাষায় শেখানোর জন্য ডিজাইন করা হয়েছে। শিক্ষার্থীদের জন্য এটি হবে বাস্তবমুখী এবং কার্যকর অভিজ্ঞতা।"</p>
          </div>
        );
      case 'review':
        return (
          <div className="content">
            <h2>মতামত</h2>
            <p>Here are the reviews...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="course-details">
      <div className="tabs">
        <button
          className={activeTab === 'details' ? 'active' : ''}
          onClick={() => setActiveTab('details')}
        >
          বিস্তারিত
        </button>
        <button
          className={activeTab === 'curriculum' ? 'active' : ''}
          onClick={() => setActiveTab('curriculum')}
        >
          কারিকুলাম
        </button>
        <button
          className={activeTab === 'instructor' ? 'active' : ''}
          onClick={() => setActiveTab('instructor')}
        >
          ইন্সট্রাক্টর
        </button>
        <button
          className={activeTab === 'review' ? 'active' : ''}
          onClick={() => setActiveTab('review')}
        >
          মতামত
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default CourseDetails;
