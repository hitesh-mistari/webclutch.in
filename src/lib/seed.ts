import { query, pool } from './db';
import crypto from 'crypto';

async function main() {
  console.log('Seeding sample multi-tenant SaaS websites...');

  // 1. Dentist Site
  const dentistContent = {
    heroTitle: 'Creating Beautiful Smiles Every Day',
    heroSubtitle: 'Gentle, premium care using state-of-the-art dental technology.',
    aboutText: 'We believe that a beautiful smile can change a life. Dr. Sarah has over 15 years of clinical experience specializing in cosmetic dentistry and full-mouth rehabilitation.',
    services: [
      'Digital Smile Design',
      'Veneers & Whitening',
      'Invisible Aligners',
      'Emergency Care',
    ],
  };

  const dentistId = crypto.randomUUID();
  const dentistRes = await query(
    `INSERT INTO "Site" (id, subdomain, name, category, content) 
     VALUES ($1, $2, $3, $4, $5) 
     ON CONFLICT (subdomain) DO UPDATE SET name = EXCLUDED.name, category = EXCLUDED.category, content = EXCLUDED.content
     RETURNING *`,
    [dentistId, 'dentist', 'Dr. Sarah Smiles', 'dentist', dentistContent]
  );
  console.log(`- Created/Updated dentist site: ${dentistRes.rows[0].subdomain}`);

  // 2. Clinic Site
  const clinicContent = {
    heroTitle: 'Your Health, Our Highest Priority',
    heroSubtitle: 'Holistic & immediate family medical services at your doorstep.',
    aboutText: 'Our multidisciplinary healthcare hub ensures premium care for patients of all ages, supported by globally recognized clinical equipment.',
    departments: [
      'Pediatrics & Maternity',
      'Modern Cardiology',
      'Advanced Imaging/MRI',
      'Nutrition Counselling',
    ],
  };

  const clinicId = crypto.randomUUID();
  const clinicRes = await query(
    `INSERT INTO "Site" (id, subdomain, name, category, content) 
     VALUES ($1, $2, $3, $4, $5) 
     ON CONFLICT (subdomain) DO UPDATE SET name = EXCLUDED.name, category = EXCLUDED.category, content = EXCLUDED.content
     RETURNING *`,
    [clinicId, 'clinic', 'WebClutch Wellness Center', 'clinic', clinicContent]
  );
  console.log(`- Created/Updated clinic site: ${clinicRes.rows[0].subdomain}`);

  // 3. Salon Site
  const salonContent = {
    heroTitle: 'Redefine Your Everyday Style',
    heroSubtitle: 'Eco-conscious hair, skin, and spa sanctuary.',
    aboutText: 'A retreat designed to pamper your senses while elevating your beauty profile with high-quality treatments.',
    services: [
      'Balayage & Styling',
      'HydraFacial Therapy',
      'Luxury Manicures',
      'Relaxation Massage',
    ],
  };

  const salonId = crypto.randomUUID();
  const salonRes = await query(
    `INSERT INTO "Site" (id, subdomain, name, category, content) 
     VALUES ($1, $2, $3, $4, $5) 
     ON CONFLICT (subdomain) DO UPDATE SET name = EXCLUDED.name, category = EXCLUDED.category, content = EXCLUDED.content
     RETURNING *`,
    [salonId, 'salon', 'Vogue Luxe Salon', 'salon', salonContent]
  );
  console.log(`- Created/Updated salon site: ${salonRes.rows[0].subdomain}`);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
  });
