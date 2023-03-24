import pool from "../db.js";

export const getEmployee = async (req, res) => {
  // console.log(req.body);
  try {
    console.log(req.params);
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ? ", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Employee not found ",
      });
    }
    console.log(rows[0]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }

  // res.send(links);
  // res.render("links/edit", { link: links[0] });

  // res.send("Usuario" + id);
};
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createEmployees = async (req, res) => {
  try {
    console.log(req.body);
    const { name, salary } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }

  // pool.query('INSERT INTO employees(name,salary) VALUES (?,?)',[])
};
export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    // const newList = {
    //   name,
    //   salary,
    // };
    const [rows] = await pool.query(
      "UPDATE employee SET name= IFNULL(?,name), salary= IFNULL(?,salary) WHERE id=?",
      [name, salary, id]
    );
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employe not found" });
    }
    // console.log(rows);
    res.send("Actualizado empleados");
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const [rows] = await pool.query("DELETE FROM employee WHERE id = ? ", [id]);
    console.log(rows);
    if (rows.affectedRows == 0) {
      return res.status(404).json({ message: "Employe not found" });
    }
    // res.send("Eliminar empleados");
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
