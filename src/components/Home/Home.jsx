import React, { useEffect, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";
import Wideads from "../Common/Ads/Wideads";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Div_1_main from "./DIV_1/Div_1_main";
import Div_2_main from "./DIV_2/Div_2_main";
import DIV_3_main from "./DIV_3/DIV_3_main";
import Hero_main from "./DIV_Hero/Hero_main";
import "./Home.css";

const Home = () => {
  // const { blogs } = useBlogs();
  // const { categories } = useCategories();

  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState([]);

  // useEffect(() => {
  //     setIsLoading(true);

  //     fetch(`${process.env.REACT_APP_API_URL}/blogs`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //             const result = data.result;
  //             console.log(result);
  //             setBlogs(result);
  //             setIsLoading(false);
  //         })
  //         .catch((error) => {
  //             setIsLoading(false);
  //         });
  // }, [blogs]);

  const blogs = [
    {
      _id: "63f745c219f09a4db6f4776a",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47769",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47768",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47767",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47766",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47765",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47764",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47763",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47762",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47761",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47760",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775f",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775e",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775d",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775c",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775b",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f4775a",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47759",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47758",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
    {
      _id: "63f745c219f09a4db6f47757",
      title: "মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল",
      author: "প্রথম আলো",
      category: "খেলা ডেস্ক",
      description:
        "২০২১ সালে নাটকীয় এক দলবদলে বার্সেলোনা ছেড়ে পিএসজিতে আসেন লিওনেল মেসি। বার্সেলোনার হয়ে সম্ভাব্য সবকিছু জেতা মেসিকে ঘিরে স্বপ্ন বুনেছিল পিএসজিও। তাদেরও প্রত্যাশা ছিল, ইউরোপে বড় সাফল্য এনে দেবেন মেসি। তবে পিএসজিতে মেসির প্রথম মৌসুমটা একেবারেই ভালো যায়নি। মাঠে বেশ ধুঁকতে হয়েছে তাঁকে। এ মৌসুমটা দারুণভাবে শুরু করেন মেসি। গোল এবং গোলে সহায়তা—দুই দিক থেকেই দলে অবদান রাখছেন। তবে এটুকু মোটেই যথেষ্ট বলে মনে করেন না পিএসজির সাবেক খেলোয়াড় জেরম রোথেন। মোনাকোর হয়ে ২০০৩–০৪ চ্যাম্পিয়নস লিগে রানার্সআপ হওয়া সাবেক এ মিডফিল্ডারের মতে, মেসিকে পিএসজিতে আনার সিদ্ধান্ত ভুল ছিল। এই দলবদল পুরোপুরি ব্যর্থ বলেও মন্তব্য করেছেন ফ্রান্সের হয়ে ১৩ ম্যাচ খেলা রোথেন। পিএসজিতে ২০০৪ থেকে ২০১০ পর্যন্ত থেকে পাঁচ মৌসুমে ফ্রেঞ্চ কাপ ও ফ্রেঞ্চ সুপার কাপ জিতেছেন ৪৪ বছর বয়সী সাবেক এ ফুটবলার।",
      coverImage:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      thumbnail:
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      images: [
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
        "https://images.prothomalo.com/prothomalo-bangla%2F2023-02%2Fc8500361-bdc3-4290-a8a4-476ea720a00e%2F6362d91ae9007cc014ec8920d1724522.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Hero_main blogs={blogs.slice(0, 3)} />
      <Div_1_main
        blogs={blogs.slice(3, 7)}
        // categories={categories.slice(0, 3)}
      />
      <Wideads />
      <Div_2_main blogs={blogs.slice(0, 10)} />
      <DIV_3_main blogs={blogs.slice(0, 3)} />
      <Footer />
    </>
  );
};

export default Home;
