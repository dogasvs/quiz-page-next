export default function Toggle() {
  function handleToggle() {
    setTheme(theme == 'light' ? 'dark' : 'light');
   }

  return (
    <div className="toggle">
      <img className='lightsun' src="/lightsun.svg" alt="light sun" />
      <img className='darksun' src="/darksun.svg" alt="dark sun" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <img className='lightmoon' src="/lightMoon.svg" alt="Light moon" />
      <img className='darkMoon' src="/darkMoon.svg" alt="dark moon" />
    </div>
  )
}