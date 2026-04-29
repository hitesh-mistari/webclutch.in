import { prisma } from './prisma';

async function main() {
  console.log('Seeding sample multi-tenant SaaS websites...');

  // 1. Dentist Site
  const dentist = await prisma.site.upsert({
    where: { subdomain: 'dentist' },
    update: {},
    create: {
      subdomain: 'dentist',
      name: 'Dr. Sarah Smiles',
      category: 'dentist',
      content: {
        heroTitle: 'Creating Beautiful Smiles Every Day',
        heroSubtitle: 'Gentle, premium care using state-of-the-art dental technology.',
        aboutText: 'We believe that a beautiful smile can change a life. Dr. Sarah has over 15 years of clinical experience specializing in cosmetic dentistry and full-mouth rehabilitation.',
        services: [
          'Digital Smile Design',
          'Veneers & Whitening',
          'Invisible Aligners',
          'Emergency Care',
        ],
      },
    },
  });
  console.log(`- Created dentist site: ${dentist.subdomain}`);

  // 2. Clinic Site
  const clinic = await prisma.site.upsert({
    where: { subdomain: 'clinic' },
    update: {},
    create: {
      subdomain: 'clinic',
      name: 'WebClutch Wellness Center',
      category: 'clinic',
      content: {
        heroTitle: 'Your Health, Our Highest Priority',
        heroSubtitle: 'Holistic & immediate family medical services at your doorstep.',
        aboutText: 'Our multidisciplinary healthcare hub ensures premium care for patients of all ages, supported by globally recognized clinical equipment.',
        departments: [
          'Pediatrics & Maternity',
          'Modern Cardiology',
          'Advanced Imaging/MRI',
          'Nutrition Counselling',
        ],
      },
    },
  });
  console.log(`- Created clinic site: ${clinic.subdomain}`);

  // 3. Salon Site
  const salon = await prisma.site.upsert({
    where: { subdomain: 'salon' },
    update: {},
    create: {
      subdomain: 'salon',
      name: 'Vogue Luxe Salon',
      category: 'salon',
      content: {
        heroTitle: 'Redefine Your Everyday Style',
        heroSubtitle: 'Eco-conscious hair, skin, and spa sanctuary.',
        aboutText: 'A retreat designed to pamper your senses while elevating your beauty profile with high-quality treatments.',
        services: [
          'Balayage & Styling',
          'HydraFacial Therapy',
          'Luxury Manicures',
          'Relaxation Massage',
        ],
      },
    },
  });
  console.log(`- Created salon site: ${salon.subdomain}`);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
