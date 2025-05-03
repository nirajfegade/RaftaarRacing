import { motion } from 'framer-motion';

const plans = [
  {
    id: 'silver',
    name: 'Silver Membership',
    price: 3000,
    sessions: 5,
    perSession: 600,
    savings: 350,
    color: 'gray'
  },
  {
    id: 'gold',
    name: 'Gold Membership',
    price: 5500,
    sessions: 10,
    perSession: 550,
    savings: 1200,
    color: 'yellow'
  },
  {
    id: 'diamond',
    name: 'Diamond Membership',
    price: 15000,
    sessions: 36,
    perSession: 416,
    savings: 9144,
    color: 'blue'
  }
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light" style={{ fontFamily: 'Racing Sans One, cursive' }}>
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-light/70 mt-4">Pick the membership that fits your racing lifestyle!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="bg-darker border border-light/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-light mb-2">{plan.name}</h3>
              <p className="text-light/60 mb-4">{plan.sessions} sessions</p>
              <p className="text-3xl font-bold text-{plan.color}">
                ₹{plan.price}
              </p>
              <p className="text-sm text-light/60 mt-2">₹{plan.perSession} / session</p>
              <p className="text-green-400 text-sm mt-1">You save ₹{plan.savings}</p>
              <button className="mt-6 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-all">
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
