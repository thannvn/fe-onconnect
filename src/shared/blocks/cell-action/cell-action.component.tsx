import { DeleteForever, Edit, ForwardToInbox } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import React from 'react';
import useConfirmDialog, {
  OpenDialogProps,
} from '../confirm-dialog/confirm-dialog.component';
import './cell-action.style.scss';

interface ActionCellProps {
  sendMailAble?: boolean;
  editAble?: boolean;
  deleteAble?: boolean;
  handleSendMail?: () => void;
  handleEdit?: () => void;
  deleteDialogInfo?: OpenDialogProps;
}

function ActionCell(props: ActionCellProps) {
  const {
    deleteAble,
    editAble,
    handleEdit,
    handleSendMail,
    sendMailAble,
    deleteDialogInfo,
  } = props;

  const { ConfirmDialog, openConfirmDialog } = useConfirmDialog();

  const handleOpenDeleteConfirm = () => {
    if (deleteDialogInfo) {
      const { description, title, handleConfirm, type } = deleteDialogInfo;
      openConfirmDialog({
        title,
        type,
        description,
        handleConfirm,
      });
    }
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      className="cell-action"
    >
      {sendMailAble && (
        <IconButton onClick={handleSendMail}>
          <ForwardToInbox sx={{ color: '#e1a809' }} />
        </IconButton>
      )}

      {editAble && (
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      )}

      {deleteAble && (
        <IconButton color="error" onClick={handleOpenDeleteConfirm}>
          <DeleteForever />
        </IconButton>
      )}

      <ConfirmDialog />
    </Stack>
  );
}

ActionCell.defaultProps = {
  sendMailAble: true,
  editAble: true,
  deleteAble: true,
  handleSendMail: () => {},
  handleEdit: () => {},
  deleteDialogInfo: {},
};

export default React.memo(ActionCell);
