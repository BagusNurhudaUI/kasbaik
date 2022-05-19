module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("profiles", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_users: {
        type: Sequelize.STRING
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      no_wa: {
        type: Sequelize.STRING
      },
      alamat_tinggal: {
        type: Sequelize.STRING
      },
      alamat_ktp: {
        type: Sequelize.STRING
      },
      profesi: {
        type: Sequelize.STRING
      },
      foto_diri: {
        type: Sequelize.STRING
      },
      foto_ktp: {
        type: Sequelize.STRING
      },
      foto_selfie: {
        type: Sequelize.STRING
      }
    });
  
    return Profile;
  };
  