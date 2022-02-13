import "./footer.css";
export default function Footer() {
  /*Java-script-to scroll function*/
  const scrollTo = (element) => {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="f1">
        {/* <br/> */}
        Copyrights &copy; 2022 VigyannVeshi |All Rights Reserved
        <br />
      </div>
      <div className="f2">
        जय श्री राम
        <br />
        जय हनुमान
        <br />
      </div>
      <svg
        onClick={() => {
          scrollTo(document.querySelector("body,html"));
        }}
        className="moveup"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
      </svg>
    </footer>
  );
}
