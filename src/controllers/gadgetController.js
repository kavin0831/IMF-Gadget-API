const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');

const generateCodename = () => {
  const names = ['Nightingale', 'Kraken', 'Phantom', 'Wolverine', 'Viper', 'Hawk'];
  return `The ${names[Math.floor(Math.random() * names.length)]}`;
};

const getRandomSuccessProbability = () => Math.floor(Math.random() * 51) + 50 + '%';

exports.getGadgets = async (req, res) => {
  const { status } = req.query;
  const gadgets = await prisma.gadget.findMany({
    where: status ? { status } : {},
  });

  const result = gadgets.map(g => ({
    ...g,
    successProbability: getRandomSuccessProbability(),
  }));

  res.json(result);
};

exports.createGadget = async (req, res) => {
  const { name, status } = req.body;

  const gadget = await prisma.gadget.create({
    data: {
      id: uuidv4(),
      name,
      codename: generateCodename(),
      status: status || 'Available',
    },
  });

  res.status(201).json(gadget);
};

exports.updateGadget = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updated = await prisma.gadget.update({
    where: { id },
    data,
  });

  res.json(updated);
};

exports.deleteGadget = async (req, res) => {
  const { id } = req.params;

  const updated = await prisma.gadget.update({
    where: { id },
    data: {
      status: 'Decommissioned',
      decommissionedAt: new Date(),
    },
  });

  res.json({ message: 'Gadget decommissioned', gadget: updated });
};

exports.selfDestruct = async (req, res) => {
  const { id } = req.params;
  const confirmationCode = Math.floor(100000 + Math.random() * 900000); 

  res.json({
    message: `Self-destruct sequence initiated for gadget ID ${id}`,
    confirmationCode,
  });
};
