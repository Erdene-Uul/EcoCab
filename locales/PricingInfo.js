import prius30 from '../Assets/prius30.png';
import prius41 from '../Assets/prius41.png';
const PricingLocale = [
    {
        negtaldaa: "Нэг талдаа",
        hoyurtaldaa: "Хоёр талдаа",
        udruur: "Өдрөөр",
    },
]

const Pricings = [
    {
        types: [
            {
                mark: 'Prius 30',
                desc: "Уух зүйл",
                image: `${prius30.src}`,
                price_negtaldaa: "74,000",
                price_hoyurtaldaa: "84,000",
                price_udruur: "254,000",
                text1: "Та манайхаас онгоцны буудал руу хүргүүлэх, онгоцны буудлаас тосуулах, гэсэн үйлчилгээ авах боломжтой."
            },
            {
                mark: 'Prius 40, 41',
                desc: "Уух зүйл",
                image: `${prius30.src}`,
                price_negtaldaa: "84,000",
                price_hoyurtaldaa: "94,000",
                price_udruur: "274,000",
                text1: "Та манайхаас онгоцны буудал руу хүргүүлэх, онгоцны буудлаас тосуулах, гэсэн үйлчилгээ авах боломжтой."
            },
            {
                mark: 'Sonata 7',
                desc: "Уух зүйл",
                image: `${prius30.src}`,
                price_negtaldaa: "74,000",
                price_hoyurtaldaa: "84,000",
                price_udruur: "284,000",
                text1: "Та манайхаас онгоцны буудал руу хүргүүлэх, онгоцны буудлаас тосуулах, гэсэн үйлчилгээ авах боломжтой."
            },
        ]
    }
]

module.exports = {
    PricingLocale,
    Pricings,
}
