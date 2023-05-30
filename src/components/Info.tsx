const Info = ({background, text, classes}: {background: string, text: string, classes: string}) => {
    return (
      <div id="section-5" className={background + " xs:py-48 lg:py-24 "}>
        <h1 className="text-5xl font-medium my-24 capitalize">{text}</h1>
        <ul className={classes + " grid grid-cols-4 gap-10 "}>
          <li>
            <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/landing-icon-3.png" alt="" />
            <h3 className="capitalize text-xl my-4 font-medium">ocean freight</h3>
            <p>Vix ut ignota deserunt+ partien ad, pros tale falli periculis ad, idque deseruisse constituam.</p>
          </li>
          <li>
            <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/landing-icon-4.png" alt="" />
            <h3 className="capitalize text-xl my-4 font-medium">ocean freight</h3>
            <p>Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.</p>
          </li>
          <li>
            <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/landing-icon-1.png" alt="" />
            <h3 className="capitalize text-xl my-4 font-medium">ocean freight</h3>
            <p>Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.</p>
          </li>
          <li>
            <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/landing-icon-2.png" alt="" />
            <h3 className="capitalize text-xl my-4 font-medium">ocean freight</h3>
            <p>Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.</p>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Info