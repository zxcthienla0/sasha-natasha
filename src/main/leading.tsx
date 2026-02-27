export const Leading = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 lg:px-2 lg:pt-24 xl:mb-50 flex max-xl:flex-col lg:justify-between lg:items-center flex-row gap-3 xl:gap-12 max-xl:mb-10">
            <div className="xl:w-[40%] flex flex-col max-xl:items-center xl:text-left max-xl:text-center text1 max-xl:mb-5">
                <h3 className="text-lg sm:text-xl color2 mb-3 sm:mb-4 uppercase tracking-wider">
                    Контакты ведущего
                </h3>
                <h2 className="text-4xl color1 mb-4 uppercase">
                    Лёша Филиппов
                </h2>
                <p className="color2 text-2xl">
                    Человек который будет вести наше торжество - это замечательный ведущий Лёша Филиппов
                    <br/> <br/>
                    <a href="tel:+79607687475" className="text-[#C3937C] font-bold">его телефон +79607687475</a>
                </p>
            </div>

            <div className="relative xl:w-[59%]">
                <img
                    src="Leading.JPG"
                    alt="Leading"
                    className="w-full h-auto xl:rounded-bl-[170px] object-cover object-center border-4 border-[#C3937C]"
                />

                <img
                    src="ramka.png"
                    alt=""
                    className="absolute top-[-60px] right-[-73px] w-30 xl:w-auto z-10 overflow-hidden max-xl:hidden rotate-y-180"
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