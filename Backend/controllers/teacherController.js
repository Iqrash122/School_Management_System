import Teacher from '../models/Teacher';

// create function 

export const createTeacher  = async (req , res)=>{
    try {
        const teacher = await Teacher.create(req.body);
        res.status(201).json(teacher);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//  Get all teacher 

export const getTeacher = async(req , res)=>{
   const teachers = await Teacher.find.sort({
    createdAt:-1
   });
   res.json(teachers);
};



//  get teacher by id 

export const getTeacherbyID = async(req , res)=>{
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
        return res.json(404).json({
            error:"Teacher Not Found"
        });
    } 
    else {
        res.json(teacher);
    }
};

//  update teacher 

export const updateTeacher = async(req , res)=>{
    const teacher = await Teacher.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );
    res.json(teacher);
}


//  delete teacher 

export const deleteTeacher = async (req , res)=>{
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({
        Success:"Deleted Successfully!"
    });
}