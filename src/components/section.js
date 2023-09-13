import icon from '../image/Icon.png'
const Section = () => {
    return ( 
        <section className="what-we-offer" id="about" >
        <h2>What we Offer</h2>
        <div class="container">
  <div className="card ">
     <p className='flex'><img src={icon} alt=''  style={{height:'15px',width:'15px'}}/>Manage your money and transactions anytime, anywhere using our user-friendly website.</p>
  </div>
  <div className="card">
     <p className='flex'><img src={icon} alt=''style={{height:'15px',width:'15px'}}/>Clear explanation of the terms and conditions  of the loans and saving so that your always in safe side</p>
  </div>
  <div className="card">
     <p className='flex'><img src={icon} alt='' style={{height:'15px',width:'15px'}}/>Get real time financial insight forbetter decision.</p>
  </div>
  <div className="card">
     <p className='flex'><img src={icon} alt='' style={{height:'15px',width:'15px'}}/>Keep your data secure with strong encryption.</p>
  </div>
</div>

      </section>
     );
}
 
export default Section;