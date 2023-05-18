import { NextApiRequest, NextApiResponse } from 'next';
import platesData from '../data/plates';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { plateNumber } = req.query;

  if (!plateNumber) {
    return res.status(400).json({ error: 'Plate number is required.' });
  }

  const filteredPlates = platesData.filter((plate) =>
    plate.plateNumber.includes(plateNumber as string)
  );

  return res.status(200).json(filteredPlates);
};
