import './Intro.css'

function Intro() {
  const headerOptions = ['PRODUCTS', 'TEST DRIVE', 'FOR KIDS', 'GAMES', 'CONTACT US', 'FAQ']

  function getHeaderOptions() {
    return headerOptions.map((option) => <li key={option + Math.random()}>{option}</li>)
  }
  return (
    <div className='intro-container'>
      <div className='intro'>
        <div className='intro-blob'></div>
        <div className='intro-header'>
          <div className='intro-header_logo'></div>
          <ul>{getHeaderOptions()}</ul>
        </div>
      </div>
      <div className='polygon1'></div>
      <div className='polygon2'></div>
      <div className='polygon3'></div>
      <div className='polygon4'></div>
      <div className='intro-wave'></div>
    </div>
  )
}

export default Intro
