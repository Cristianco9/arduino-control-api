const handControlPanel =  async (req, res) => {

  try {

    res.render('handControlPanel');

  } catch (error) {

    res.status(500).json({
      "status": "Server error",
      "message": "No es posible renderizar la vista de control de la mano robótica"
    })

  }
}

export default handControlPanel;
