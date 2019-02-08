import EditorContext from '../../adapter/editor-context';

/**
 * ButtonCommand is a mixin that executes a command via CKEDITOR's API.
 *
 * @class ButtonCommand
 */
export default WrappedComponent =>
	class ButtonCommand extends WrappedComponent {
		static contextType = EditorContext;

		/**
		 * Executes a CKEditor command and fires `actionPerformed` event.
		 *
		 * @instance
		 * @memberof ButtonCommand
		 * @param {Object=} data Optional data to be passed to CKEDITOR's `execCommand` method.
		 * @method execCommand
		 */
		execCommand = data => {
			const editor = this.context.editor.get('nativeEditor');

			editor.execCommand(this.props.command, data);

			if (this.props.modifiesSelection) {
				editor.selectionChange(true);
			}

			editor.fire('actionPerformed', this);
		};
	};
