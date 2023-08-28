import ListingModel from "./listings.model.js";
export const getAll = async () => {
  try {
    const listings = await ListingModel.findAll({ where: { estate: true } });
    return listings;
  } catch (error) {
    throw new Error("error on listing service");
  }
};

export const createRecord = async (date, initialPetsNumber) => {
  try {
    initialPetsNumber = parseInt(initialPetsNumber);
    //validar si ya existe un registro con esa date
    if (isNaN(initialPetsNumber))
      throw new Error("error  petsNumber must be an integer ");
      if (petsNumber < 0) throw new Error("error  petsNumber must be positive ");
    const record = await ListingModel.findOne({
      where: { date: formateDate(date) },
    });
    if (record) throw new Error(`listing with date: ${date} already exist`);
    const newRecord = ListingModel.build();
    newRecord.setAttributes({
      date: formateDate(date),
      petsNumber: initialPetsNumber,
    });
    await newRecord.save();
    return { msg: "record created successfully", record: newRecord };
  } catch (error) {
    throw error;
  }
};

export const putById = async (id, body) => {
  try {
    const petsNumber = parseInt(body.petsNumber);
    if (isNaN(petsNumber))
      throw new Error("error  petsNumber must be an integer number ");
    if (petsNumber < 0) throw new Error("error  petsNumber must be positive ");
    id = parseInt(id);
    if (isNaN(id)) throw new Error("error  id must be an integer");
    const listing = await ListingModel.findByPk(id);
    if (!listing) throw new Error(`error listing with id:${id} not exist`);

    listing.setAttributes({ estate: true, petsNumber: petsNumber });
    if(body.date){
      listing.setAttributes({date:formateDate(date)})
    }

    await listing.save();

    return { msg: "loadPets successfully", listing: listing };
  } catch (error) {
    throw error;
  }
};
export const getByDate = async (date) => {
  try {
    const listing = await ListingModel.findOne({
      where: { date: formateDate(date) },
    });
    if (!listing.estate)
      throw new Error(
        `error listing with date:${date} is inactive and have id: ${listing.id}`
      );
    return listing;
  } catch (error) {
    throw error;
  }
};
export const getById = async (id) => {
  try {
    id = parseInt(id);
    if (isNaN(id)) throw new Error("error  id must be an integer ");
    const listing = await ListingModel.findByPk(id);
    if (!listing) throw new Error(`error listing with id:${id} not exist`);
    if (!listing.estate)
      throw new Error(`error listing with id:${id} is inactive`);
    if (!listing.estate)
      throw new Error(`error listing with date:${date} is inactive`);
    return listing;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id) => {
  try {
    id = parseInt(id);
    if (isNaN(id)) throw new Error("error  id must be an integer ");
    const listing = await ListingModel.findByPk(id);
    if (!listing) throw new Error(`error listing with id:${id} not exist`);
    if (!listing.estate)
      throw new Error(`error listing with id:${id} is inactive`);
    listing.setAttributes({ estate: false });
    listing.save();
    return { msg: "deleted successfully" };
  } catch (error) {
    throw error;
  }
};

const formateDate = (date) => {
  const [mes, día, año] = date.split("/");
  return `${año}-${mes}-${día}`;
};
