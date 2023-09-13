
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="social-icons flex flex-row ">
         
            
            
               
                
              
             
              <p className="flex ">Contact Us:
              <i className="bi bi-envelope-fill text-white ml-4 cursor-pointer"></i>

              
              
              <i className="bi bi-telephone-fill text-white ml-4 cursor-pointer"></i>
</p>
               <div className="flex justify-end ml-96  ">
              <h4
                style={{
                  color: "white",
                 
                }}
              >
                Follow Us On:
              </h4>
              <div className=" flex justify-end">
                <div className="flex   justify-end">
                  <a href="/" className="icon-link ">
                    
                  <i className="bi bi-instagram text-white ml-4"></i>
                  </a>

                  <a href="/" className="icon-link ">
                  <i className="text-white bi bi-twitter ml-4"></i>
                  </a>
                  <a href="/" className="icon-link ">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="/" className="icon-link ">
                  <i className="bi bi-linkedin text-white ml-4"></i>
                  </a>
                  <a href="/" className="icon-link ">
                  <i class="text-white bi bi-facebook ml-4"></i>
                  </a>
                </div>
              </div>
              </div>
           
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
