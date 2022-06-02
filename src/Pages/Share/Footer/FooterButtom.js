import React from "react";

const FooterButtom = () => {
    const year=new Date().getFullYear();
  return (
    <footer class="footer footer-center text-white text-xl">
      <div>
        <p>Copyright © {year} - All right reserved by Move Home Industries Ltd</p>
      </div>
    </footer>
  );
};

export default FooterButtom;
