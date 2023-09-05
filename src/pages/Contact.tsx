import Info from '../components/Info';
import Map from '../components/Map/Map';
import ServiceForm from '../components/ServiceForm';

const Contact = () => {
  return (
    <div>
      <Map  />
      <Info background={'bg-[#fffbfb]'} text={''} classes={'mx-auto w-4/5'}/>
      <div className="lg:grid lg:grid-cols-2 gap-10 lg:my-20 my-10 mx-auto w-4/5">
      <div className='my-9'>
        <h1 className='text-4xl font-medium text-center mb-6'>Get in touch with us</h1>
        <p className="text-gray">
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am, velit rutrum dictum lobortis, turpis justo auc tor quam, a auctor lorem odio in nunc.
        </p>
        <p className="text-sm mt-14">Support Center 24/7</p>
      </div>
      <ServiceForm title={''} text={''}/>
      </div>
    </div>
  )
}

export default Contact