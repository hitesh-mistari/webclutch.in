export const clinicData = {
  name: 'The Dental Edge',
  tagline: 'Dental care & implant center',
  doctor: {
    name: 'Dr. Tulsi Bhutada Amesar',
    qualifications: 'BDS — 9 Years Experience',
    title: 'Dentist, Dental Surgeon, Cosmetic/Aesthetic Dentist',
    image: '/images/team/1.webp',
    bio: 'Dr. Tulsi Bhutada Amesar is a dedicated Dental Surgeon and Cosmetic/Aesthetic Dentist with over 9 years of experience in delivering exceptional dental care. She completed her BDS from Maharashtra University of Health Sciences in 2017 and has been committed to creating healthy, beautiful smiles ever since.',
    expertise: [
      { icon: 'icofont-tooth', label: 'Root Canal Treatment' },
      { icon: 'icofont-surgeon-alt', label: 'Dental Implants' },
      { icon: 'icofont-flash', label: 'Laser Dentistry' },
      { icon: 'icofont-shield', label: 'Cosmetic Dentistry' }
    ],
    stats: [
      { number: '1000+', label: 'Happy Patients' },
      { number: '300+', label: 'Root Canal Treatments' },
      { number: '200+', label: 'Dental Implants' },
      { number: '9+', label: 'Years of Experience' }
    ]
  },
  contact: {
    phone: '+91 77096 40743',
    phoneRaw: '+917709640743',
    whatsappRaw: '917709640743',
    address: 'F-01, Anand Bhutada Sankul, Bytco Point, Nashik',
    hours: 'Mon - Sat: 10:30 AM - 1:30 PM, 05:30 PM - 8:30 PM',
    hoursShort: 'Mon - Sat: 10:30 AM - 1:30 PM, 05:30 PM - 8:30 PM',
    sundayHours: 'Sunday: Closed',
    mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.622543324683!2d73.83573767510793!3d19.95306248135832!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95c3f0beb365%3A0xd0585399ea97656e!2sThe%20Dental%20Edge!5e0!3m2!1sen!2sin!4v1713342500000!5m2!1sen!2sin'
  },
  socials: {
    instagram: 'https://www.instagram.com/the.dentaledge/',
    youtube: 'https://www.youtube.com/@thedentaledge',
    whatsapp: 'https://api.whatsapp.com/send?phone=917709640743'
  },
  about: {
    title: 'Simple, Honest Dental Care You Can Trust',
    description: 'At The Dental Edge, we focus on making dental care comfortable, clear, and stress-free. Led by Dr. Tulsi Bhutada Amesar, the clinic is built around one goal — giving every patient the right treatment with proper guidance, not confusion.',
    points: [
      'Treatment planned as per your actual need',
      'Clean clinic with modern dental equipment',
      'Calm and comfortable experience for all age groups',
      'Easy appointment process with minimal waiting'
    ],
    features: [
      { title: 'Clear Explanation', desc: 'You\'ll understand your treatment before we begin — no confusion.' },
      { title: 'Comfort-Focused Care', desc: 'Procedures are done gently to keep you relaxed throughout.' },
      { title: 'Modern Setup', desc: 'Clean clinic with updated equipment for better treatment.' },
      { title: 'Personal Attention', desc: 'Every patient is treated individually, not rushed.' }
    ]
  },
  services: [
    {
      title: 'Root Canal Treatment (RCT)',
      desc: 'Treat tooth infection and save your natural tooth with a comfortable procedure.',
      img: '/images/RCT.webp',
      link: '/service-root-canal-treatment'
    },
    {
      title: 'Braces & Aligners',
      desc: 'Align your teeth properly for a better smile and improved bite with our custom solutions.',
      img: '/images/orthodontic-treatments.jpg',
      link: '/service-braces-and-aligners'
    },
    {
      title: 'Dental Implants',
      desc: 'Replace missing teeth with a high-quality permanent solution that looks and feels natural.',
      img: '/images/invisalign-treatment.jpg',
      link: '/service-dental-implants'
    },
    {
      title: 'Crowns & Bridges',
      desc: 'Repair damaged teeth or fill gaps with natural-looking restorations that restore function.',
      img: '/images/crowns-and-bridge.jpg',
      link: '/service-crowns-and-bridges'
    }
  ],
  faqs: [
    { 
      q: 'How often should I visit the dentist?', 
      a: 'It’s generally recommended to visit every 6 months for a check-up and cleaning, unless advised otherwise.' 
    },
    { 
      q: 'What should I do in a dental emergency?', 
      a: 'Contact the clinic as soon as possible. Early treatment helps prevent the issue from getting worse.' 
    },
    { 
      q: 'Do you treat children as well?', 
      a: 'Yes, we provide gentle and comfortable dental care for children of all ages.' 
    },
    { 
      q: 'What are the options for missing teeth?', 
      a: 'Depending on your case, options include dental implants, bridges, or other suitable treatments.' 
    },
    { 
      q: 'Is teeth whitening safe?', 
      a: 'Yes, when done under professional guidance, it is safe and effective.' 
    }
  ],
  hero: {
    title: 'Healthy Smile \n Happy Life',
    subtitle: 'Experience world-class dental care equipped with advanced technology. We prioritize your comfort and deliver professional treatments tailored perfectly for a healthy smile.'
  },
  kids: {
    title: 'Kids Dental Treatment Diaries',
    description: 'At The Dental Edge, we believe every child deserves a positive dental experience. Our "Kids Dental Treatment Diaries" show how we provide gentle, effective care tailored for young smiles in a stress-free environment.',
    posters: [
      '/images/kids_poster_new.png',
      '/images/kids_poster2.jpg',
      '/images/kids_poster3.jpg'
    ],
    features: [
      { text: 'Fun and positive dental checkups', icon: 'fa-child' },
      { text: 'Highly experienced pediatric-friendly team', icon: 'fa-user-md' },
      { text: 'Gentle treatments for early cavity prevention', icon: 'fa-shield' },
      { text: 'A modern clinic designed for children\'s comfort', icon: 'fa-heart' }
    ]
  },
  testimonials: {
    row1: [
      { name: 'Vineet Joshi', text: 'Dr. Tulsi provided clear communication about the cavities, explaining which fillings required urgent attention and which could be deferred. The teeth cleaning was completed first and was done thoroughly.', stars: 5, image: '/images/testimonial/1.webp' },
      { name: 'tejas bhojwani', text: 'One of the best dental clinics I’ve visited. Modern equipment, clean environment, and very professional approach. The doctor took time to understand my problem.', stars: 5, image: '/images/testimonial/2.webp' },
      { name: 'Anu Kadam', text: 'I had my aligner treatment done at this dental clinic. The doctor was very professional and supportive, and the treatment experience was smooth. I’m satisfied with the results. Highly recommended.', stars: 5, image: '/images/testimonial/anu.png' },
      { name: 'khushboo chhajed', text: 'Great experience! The dentist was very gentle and explained everything clearly. Highly recommended!', stars: 5, image: '/images/testimonial/khushboo.png' },
      { name: 'Urvashi Varma', text: 'Honestly, i was worrried as i was taking my 17 month old daughter for her first dental checkup. But Tulsi, with her handson experience and patience, managed to check her so easily.', stars: 5, image: '/images/testimonial/urvashi.png' },
    ],
    row2: [
      { name: 'Priya Parshurame', text: 'Excellent diagnosis and treatment. Proficient and super skilled. Thank you very much', stars: 5, image: '/images/testimonial/priya.png' },
      { name: 'Raj Chopda', text: 'Best doctor , understands the root problem, is patient listener and then treats really nice .', stars: 5, image: '/images/testimonial/3.webp' },
      { name: 'Achyut Bhutada', text: 'Thank you to The Dental Edge for the wonderful dental experience! Dr. Tulsi and the team made me feel comfortable.', stars: 5, image: '/images/testimonial/4.webp' },
      { name: 'Sayyam', text: 'I was a good experience where I got my cavities removed and and got filling done.', stars: 5, image: '/images/testimonial/5.webp' },
      { name: 'Vishal Amesar', text: 'Had an excellent experience with my dental treatment. Very professional and caring. Highly satisfied with the results', stars: 5, image: '/images/testimonial/6.webp' },
    ]
  }
};
