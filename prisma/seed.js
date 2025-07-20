const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  // Seed user
  const passwordHash = await bcrypt.hash('mission123', 10);
  await prisma.user.create({
    data: {
      username: 'agent47',
      password: passwordHash,
    },
  });

  await prisma.gadget.createMany({
    data: [
      { name: 'Face Mask Generator', codename: 'The Shadow', status: 'Available' },
      { name: 'Grappling Hook Launcher', codename: 'The Kraken', status: 'Deployed' },
      { name: 'Contact Lens Camera', codename: 'The Viper', status: 'Available' },
      { name: 'Self-Destruct Phone', codename: 'The Shadow', status: 'Destroyed' },
      { name: 'Exploding Gum', codename: 'The Kraken', status: 'Available' },
      { name: 'Magnetic Climbing Gloves', codename: 'The Viper', status: 'Deployed' },
      { name: 'Mini EMP Device', codename: 'The Shadow', status: 'Available' },
      { name: 'Invisible Ink Pen', codename: 'The Kraken', status: 'Available' },
      { name: 'Voice Changer Earpiece', codename: 'The Viper', status: 'Deployed' },
      { name: 'Nano GPS Tracker', codename: 'The Shadow', status: 'Available' },
    ],
  });

  console.log('Seed data inserted: 1 user, 10 gadgets with 3 codenames.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
