
import Nav from '@/components/navbar/Nav'
import Banner from '@/components/banner/Banner'
import CardGrid from '@/components/CardGrid'
import LoginForm from '@/components/login form/Login'
import Footer from '@/components/footer/Footer'


const Home = ()=> {
    return (

        <>
            <Nav />
            <Banner />
            <CardGrid/>
            <LoginForm />
            <Footer />
        </>
    )
}

export default Home;