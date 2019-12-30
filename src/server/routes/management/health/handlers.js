const getHealth = async (req, reply) => {
    return { status: 'UP' };
};

module.exports = { getHealth };
