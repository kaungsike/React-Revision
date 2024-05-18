import React, { useState } from "react";
import Box from "./Box";

const App = () => {
  const [faqs, setFaq] = useState([
    {
      id: 1,
      question: "ဝက်ဘ်ဆိုဒ်အတွက် ဘယ်လိုအကောင့်တစ်ခု လိုအပ်ပါသလဲ?",
      answer:
        "ဝက်ဘ်ဆိုဒ်သုံးရန်အတွက် သင်၏အီးမေးလ်လိပ်စာနှင့် စကားဝှက်တစ်ခုဖြင့် အကောင့်ဖွင့်နိုင်သည်။",
      hide: true,
    },
    {
      id: 2,
      question: " ကျွန်ုပ်၏စကားဝှက်ကို မေ့နေပါက ဘာလုပ်ရမည်နည်း?",
      answer:
        " စကားဝှက်ကို မေ့နေပါက 'စကားဝှက်မေ့နေပါသလား' ခလုတ်ကို နှိပ်ပြီး၊ သင်၏အီးမေးလ်လိပ်စာထည့်ပါက စကားဝှက်ပြန်သတ်မှတ်ရန် လင့်ခ်တစ်ခုကို လက်ခံရရှိပါမည်။",
      hide: true,
    },
    {
      id: 3,
      question: " ဝန်ဆောင်မှုနှုန်းထားများကို ဘယ်လိုကြည့်ရှုနိုင်ပါသလဲ?",
      answer:
        "ဝန်ဆောင်မှုနှုန်းထားများကို ကြည့်ရှုရန် အင်တာနက်ဝက်ဘ်ဆိုဒ်၏ 'နှုန်းထားများ' စာမျက်နှာသို့ ဝင်ရောက်ကြည့်ရှုနိုင်သည်။",
      hide: true,
    },
    {
      id: 4,
      question: "ကျွန်ုပ်၏အကောင့်ကို ဘယ်လိုဖျက်မည်နည်း?",
      answer:
        "အကောင့်ဖျက်ရန် 'အကောင့်အချက်အလက်များ' ထဲမှ 'အကောင့်ဖျက်ရန်' ခလုတ်ကို နှိပ်ပြီး အတည်ပြုပါ။",
      hide: true,
    },
    {
      id: 5,
      question: " သင်၏ဝန်ဆောင်မှုကို ဘယ်လိုဆက်သွယ်ရမည်နည်း?",
      answer:
        "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုကို ဆက်သွယ်ရန် အီးမေးလ် (သို့) ဖုန်းနံပါတ်မှတဆင့် ဆက်သွယ်နိုင်ပါသည်။ ဆက်သွယ်ရန်အချက်အလက်များကို 'ဆက်သွယ်ရန်' စာမျက်နှာတွင် ရှာဖွေနိုင်သည်။",
      hide: true,
    },
  ]);

  const clickBox = (id) => {
    console.log("U click box id", id);
    setFaq(faqs.map((faq) => {
        if (id === faq.id) {
          faq.hide = !faq.hide;
          return faq;
        } else {
          faq.hide = true;
          return faq;
        }
        return faq;
      }))
  };

  return (
    <div className="p-5">
      {faqs.map((faq) => (
        <Box
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
          clickBox={clickBox}
          hide={faq.hide}
        />
      ))}
    </div>
  );
};

export default App;
