export const GiftList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-2 lg:pt-24 xl:mb-50 flex max-xl:flex-col lg:justify-between lg:items-center flex-row-reverse gap-3 xl:gap-12 max-xl:mb-10">
        <div className="lg:text-right xl:w-[40%] flex flex-col max-xl:items-center xl:text-right max-xl:text-center text1 max-xl:mb-5">
          <h3 className="text-lg sm:text-xl color2 mb-3 sm:mb-4 uppercase tracking-wider">
            Пожелания
          </h3>
          <h2 className="text-3xl color1 mb-4 uppercase">
            Спасибо что вы с нами
          </h2>
          <p className="color2 text-2xl">
            Мы не хотим, чтобы вы переживали из-за подарка, 
            ваше присутствие на нашем празднике и ваши улыбки 
            это уже лучшие подарки для нас!!! <br/>
            но если вы вдруг 
            хотите дополнительно нас поздравить, то  мы будем 
            благодарны за финансовую поддержу нашей мечты: строительство 
            нашего общего дома <br/>и свадебное путешествие, 
            <br/>что сделает нас еще счастливее {")))"}
          </p>
        </div>

        <div className="relative xl:w-[59%]  max-xl:border-4 border-[#C3937C]">
          <img
            src="Happy.jpg"
            alt="Alexander and Natalia"
            className="w-full xl:rounded-br-[170px] object-cover object-center h-[500px]"
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
        </div>
    </section>
  );
};