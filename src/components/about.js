import Footer from "./footer";
import Navibar from "./navbar";

const About = () => {
    return ( 
    <div className="about ">
         <Navibar/>
        <div className="m-9 font-extrabold text-4xl">About us </div>
        <p className="m-9 flex  items-center justify-center  flex-col text-1.5xl" > People began to realize that they didn't need to be millionaires to invest and grow their wealth. Micro-investment platforms like PennyGrow were leveling the playing field, allowing everyone to participate in the financial markets, no matter their income.

Emily's journey continued as she set new financial goals – buying a home, starting a small business, and eventually achieving financial independence. With the help of micro-investment, she was turning her dreams into reality, one penny at a time.

But Emily's greatest achievement was not just her financial success; it was the impact she had on her community. She started teaching financial literacy workshops at local schools and community centers, helping others take their first steps toward financial freedom.

</p>
<Footer />
    </div>
     );
}
 
export default About;