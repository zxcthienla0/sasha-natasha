export const PlaceInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-2 lg:pt-24 xl:mb-50 flex max-xl:flex-col lg:justify-between lg:items-center flex-row-reverse gap-3 xl:gap-12 max-xl:mb-10">
        <div className="lg:text-right xl:w-[40%] flex flex-col max-xl:items-center xl:text-right max-xl:text-center text1 max-xl:mb-5">
          <h3 className="text-lg sm:text-xl color2 mb-3 sm:mb-4 uppercase tracking-wider">
            Место торжества
          </h3>
          <h2 className="text-3xl color1 mb-4 uppercase">
            Грин парк Базайская ул. 341
          </h2>
          <p className="color2 text-2xl">
            Наше мероприятие будет проходить в невероятно красивом месте, на берегу реки Базаиха, в Грин Парк Отеле, в шатре. Для вашего комфорта просим надеть легкую одежду 
            и удобную обувь для зажигательных танцев. <br /> <br />
            <div className="font-bold">
            Так же рекомендуем взять накидку <br /> на случий дождя.
            </div>
          </p>
        </div>

        <div className="relative xl:w-[59%] max-xl:border-4 border-[#C3937C]">
          <img
            src="photo2.webp"
            alt="Alexander and Natalia"
            className="w-full h-auto xl:rounded-br-[170px] object-cover object-center"
          />
          
          <img
            src="ramka.png"
            alt=""
            className="absolute top-[-27px] left-[-32px] xl:top-[-60px] xl:left-[-73px] w-30 xl:w-auto z-10 overflow-hidden"
          />
          
          <img
            src="gold.png"
            alt=""
            className="absolute max-xl:hidden xl:top-[-250px] xl:left-[-250px] 2xl:top-[-350px] 2xl:left-[-350px] scale-50 xl:scale-75 z-10"
          />

          <div className="xl:absolute xl:bottom-[-120px] xl:right-[100px] 2xl:bottom-[-140px] 2xl:right-[150px]">
            <div className="relative">
              <img
                src="secondphoto2.jpg"
                alt="Couple"
                className="w-full h-auto xl:w-[267px] xl:h-[351px] object-cover object-center xl:shadow-xl shadow-gray-400"
              />
              
              <img
                src="vetka2.png"
                alt=""
                className="absolute max-xl:hidden xl:bottom-[80px] xl:right-[-240px] 2xl:bottom-[90px] 2xl:right-[-263px] rotate-[-12deg] w-auto h-auto"
              />
              
              <img
                src="gold.png"
                alt=""
                className="absolute max-xl:left-4 bottom-[45px] xl:bottom-[-15px] xl:right-[-220px] xl:rotate-[-12deg] scale-100 xl:scale-200"
              />
              <img
                src="gold.png"
                alt=""
                className="absolute bottom-[155px] right-4 xl:hidden"
              />
            </div>
          </div>
        </div>
    </section>
  );
};