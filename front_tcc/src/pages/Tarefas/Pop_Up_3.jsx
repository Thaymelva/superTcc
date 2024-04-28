import React, { useEffect } from 'react';
import { Modal, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate } from 'react-router-dom';

const Tarefa_Excluida = ({ open, handleClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const redirectTimeout = setTimeout(() => {
        navigate('/Central_Tarefas');
      }, 2000);
      return () => clearTimeout(redirectTimeout);
    }
  }, [open, navigate]);

  return (
    <Modal 
      open={open} 
      onClose={handleClose} 
      onClick={handleClose}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          width: '340px',
          height: '340px',
          borderRadius: '6px',
        }}
      >

        <DeleteForeverOutlinedIcon
          sx={{ 
            width: 300, 
            height: 170, 
            color: '#07382E' 
          }}
        />

        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Tarefa Excluída
        </Typography>
        
        <Typography
          variant="body2"
          sx={{ 
            marginTop: '5%', 
            textAlign: 'center', 
            fontSize: '1rem' 
          }}
        >
          A tarefa foi excluída com sucesso!
        </Typography>

      </div>

    </Modal>

  );
  
};

export default Tarefa_Excluida;
