class Api::V1::MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages, status: 200
  end

  def hello
    @message = Message.find(Message.pluck(:id).sample)
    render json: @message, status: 200
  end
end
