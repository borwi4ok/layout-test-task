import './Intro.css'

function Intro() {
  const headerOptions = ['PRODUCTS', 'TEST DRIVE', 'FOR KIDS', 'GAMES', 'CONTACT US', 'FAQ']

  function getHeaderOptions() {
    return headerOptions.map((option) => (
      <li key={option + Math.random()}>
        <a href='/'>{option}</a>
      </li>
    ))
  }
  return (
    <div className='intro-container'>
      <div className='intro-blob'></div>
      <div className='intro'>
        <div className='intro-header'>
          <div className='intro-header_logo'></div>
          <ul className='intro-header_items'>{getHeaderOptions()}</ul>
        </div>

        <div className='intro-main'>
          <div className='intro-icons'>
            <ul>
              <li className='intro-icons_inst'></li>
              <li className='intro-icons_yt'></li>
              <li className='intro-icons_fb'></li>
            </ul>
          </div>
          <div className='intro-text'>
            <h1 className='intro-text_title'>Turn any space into a virtual playground</h1>
            <p className='intro-text_prgh'>
              an interactive projector game system that makes entertainment lively, hygienic,
              educational, and above all, a ton of fun
            </p>
            <div>
              <button className='intro-text_btn'>
                <div className='intro-text_btn_arrow'></div>GET STARTED FOR FREE
              </button>
            </div>
          </div>
          <div className='intro-girlImg'></div>
        </div>
      </div>

      {/* geometric figures */}
      <div className='polygon1'></div>
      <div className='polygon2'></div>
      <div className='polygon3'></div>
      <div className='polygon4'></div>
      <div className='intro-wave'></div>
    </div>
  )
}

export default Intro
