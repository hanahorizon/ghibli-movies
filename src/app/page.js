
import Nav from '@/components/navbar/Nav'
import Banner from '@/components/banner/Banner'
import CardGrid from '@/app/CardGrid'
import LoginForm from '@/components/login form/Login'
import Footer from '@/components/footer/Footer'


const page = ()=> {
    return (

        <>

            <Banner />
            <CardGrid/>
            <LoginForm />

        </>
    )
}

export default page;