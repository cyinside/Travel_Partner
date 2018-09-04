import PicDelConfirmLogUI=ui.log.picture.PicDelConfromUI;
class PicDelConfirmLog extends PicDelConfirmLogUI{
    public constructor(){
        super();
        this.PicDelConfirmInit();
    }

    private PicDelConfirmInit(){
        this.cancelBut.name = Dialog.CANCEL;
    }
}