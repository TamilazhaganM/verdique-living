import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import CheckoutForm from "../../components/cart/CheckoutForm";
import CheckoutSummary from "../../components/cart/CheckoutSummary";


const Checkout = () => {


    return (

        <section className="py-16">

            <Container>

                <SectionTitle
                    title="Checkout"
                    subtitle="Complete your order securely."
                />

                <div className="grid lg:grid-cols-3 gap-10 mt-12">

                    <div className="lg:col-span-2">

                        <CheckoutForm />

                    </div>

                    <CheckoutSummary />

                </div>

            </Container>

        </section>

    );

};

export default Checkout;