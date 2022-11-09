import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Babyshop in next.js app"/>
                <link rel="icon" href="/public/assets/img/favicon.ico"/>
            </Head>

            <Header/>

            <main>
                банер
                Slide
                ---
                ассортимент
                вы уже смотрели
                акции
                подписка на рассылку
                популярные
                новинки
                о нас
                бренды
                обратная связь
                отзывы
                картинки
                блог
            </main>
            <footer>
                футер
            </footer>
        </div>
    )
}
