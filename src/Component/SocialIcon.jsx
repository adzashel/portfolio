const SocialIcon = ({ tiktok ,github, ig , twt }) => {
  return (
    <div className="social-icon">
    <button>
      <a href="https://www.tiktok.com/@jie4code" target="_blank">
        <img src={tiktok} alt="Icon" />
      </a>
    </button>
    <button>  
      <a href="https://github.com/adzashel" target="_blank">
        <img src={github} alt="Icon" />
      </a>
    </button>
    <button>
      <a href="https://www.instagram.com/adzshll" target="_blank">
        <img src={ig} alt="Icon" />
      </a>
    </button>
    <button>
      <a href="https://x.com/ichbinVerr_15" target="_blank">
        <img src={twt} alt="Icon"/>
      </a>
    </button>
    <button className="swallow__icon">
  <a href="#home"><span></span></a>
</button>
  </div>
  )
}

export default SocialIcon
