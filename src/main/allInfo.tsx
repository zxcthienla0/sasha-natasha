export const AllInfo = () => {
    return (
        <section className="w-full mx-auto lg:pt-24 text1 max-xl:mb-10 pt-10 xl:pt-40">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-xl:items-center max-xl:text-center">
                <div className="order-1 lg:pl-80 px-2 z-10 max-xl:items-center max-xl:mb-5">
                    <h3 className="text-xl color2 mb-4 uppercase">
                        Приглашение
                    </h3>
                    <h2 className="text-4xl color1 mb-4 uppercase">Дорогие друзья!</h2>
                    <p className="color2 text-2xl">
                        Жить, любить, чувствовать. Однажды мы поняли, что нет ничего
                        важнее этого. И что идти дальше мы хотим только вместе. А теперь
                        мечтаем, чтобы день нашей свадьбы стал красивым и ярким событием
                        на этом увлекательном пути. <br/> <br/>
                        Мы будем очень рады, если вы разделите этот счастливый день с нами.<br/> <br/>
                        Увидимся на нашей свадьбе!
                    </p>
                </div>
                <div className="order-2 flex justify-center relative max-xl:px-2">
                    <img
                        src="photo1.jpg"
                        alt="Описание"
                        className="w-full h-[393px] xl:rounded-tl-[170px] object-cover object-center z-5 max-xl:border-4 border-[#C3937C]"
                    />
                    <img src="gold.png" alt="" className="absolute top-[-200px] xl:top-[-400px] xl:right-70 xl:rotate-45 z-0 xl:z-10" />

                    <img
                        src="ramka.png"
                        alt=""
                        className="absolute top-[-22px] left-[-20px] xl:hidden w-30 z-10 overflow-hidden"
                    />
                </div>
            </div>
        </section>
    )
}